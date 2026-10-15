import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';

// Import the same browser module even when Node has no package.json type setting.
const source = await readFile(new URL('./cycle-engine.js', import.meta.url), 'utf8');
const { dateKey, parseDate, addDays, daysBetween, validatePeriod, getStats, predictNextPeriod } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const makePeriods = (first, intervals) => {
  const starts = [first];
  for (const length of intervals) starts.push(addDays(starts.at(-1), length));
  return starts.map((start, i) => ({ id: `record-${i}`, start, end: addDays(start, 4) }));
};

test('strict calendar parsing handles leap years and rejects normalized impossible dates', () => {
  assert.equal(parseDate('2024-02-29').toISOString(), '2024-02-29T00:00:00.000Z');
  for (const value of ['2023-02-29', '2024-04-31', '2024-00-01', '2024-13-01', '24-01-01', '2024-1-01', '', null, '2024-01-01T00:00:00Z', '0000-01-01']) {
    assert.equal(parseDate(value), null, String(value));
  }
  assert.equal(parseDate('0099-01-01').getUTCFullYear(), 99);
});

test('date-only arithmetic crosses leap days, years and DST boundaries consistently', () => {
  assert.equal(addDays('2024-02-28', 1), '2024-02-29');
  assert.equal(addDays('2024-02-28', 2), '2024-03-01');
  assert.equal(addDays('2025-01-01', -1), '2024-12-31');
  assert.equal(daysBetween('2024-03-09', '2024-03-11'), 2);
  assert.equal(daysBetween('2024-11-02', '2024-11-04'), 2);
  assert.equal(daysBetween('2024-03-11', '2024-03-09'), -2);
  assert.equal(dateKey(new Date(2024, 4, 2, 23, 30)), '2024-05-02');
  assert.throws(() => addDays('2024-02-30', 1), TypeError);
  assert.throws(() => addDays('2024-02-01', 0.5), TypeError);
  assert.throws(() => daysBetween('bad', '2024-02-01'), TypeError);
  assert.throws(() => dateKey(new Date('bad')), TypeError);
  assert.throws(() => addDays('9999-12-31', 1), RangeError);
});

test('period validation rejects future dates, reversed ranges and malformed records', () => {
  const today = '2026-10-08';
  for (const record of [
    { start: '2026-10-09', end: null },
    { start: '2026-10-01', end: '2026-10-09' },
    { start: '2026-10-02', end: '2026-10-01' },
    { start: '2026-02-30', end: null },
    { start: '2026-10-02' },
    null,
  ]) assert.equal(validatePeriod(record, [], today).valid, false);
  assert.equal(validatePeriod({ start: today, end: today }, [], today).valid, true);
});

test('inclusive overlaps are rejected, adjacent days allowed and own ID excluded for edits', () => {
  const existing = [{ id: 'a', start: '2026-09-01', end: '2026-09-05' }];
  assert.equal(validatePeriod({ id: 'b', start: '2026-09-05', end: '2026-09-08' }, existing, '2026-10-08').valid, false);
  assert.equal(validatePeriod({ id: 'b', start: '2026-09-06', end: '2026-09-08' }, existing, '2026-10-08').valid, true);
  assert.equal(validatePeriod({ id: 'a', start: '2026-09-01', end: '2026-09-06' }, existing, '2026-10-08').valid, true);
  assert.equal(validatePeriod({ id: 'b', start: '2026-08-30', end: '2026-09-07' }, existing, '2026-10-08').valid, false);
});

test('only one ongoing record is allowed and it cannot overlap subsequent records', () => {
  const existing = [{ id: 'a', start: '2026-09-01', end: null }];
  assert.equal(validatePeriod({ id: 'b', start: '2026-10-01', end: null }, existing, '2026-10-08').valid, false);
  assert.equal(validatePeriod({ id: 'b', start: '2026-10-01', end: '2026-10-04' }, existing, '2026-10-08').valid, false);
  assert.equal(validatePeriod({ id: 'b', start: '2026-08-01', end: '2026-08-05' }, existing, '2026-10-08').valid, true);
});

test('stats sort records without mutating and count starts rather than end-to-start gaps', () => {
  const records = makePeriods('2026-01-01', [28, 30, 26]).reverse();
  const before = JSON.stringify(records);
  const stats = getStats(records, '2026-04-01');
  assert.deepEqual(stats.intervals, [28, 30, 26]);
  assert.equal(stats.completedCycles, 3);
  assert.equal(stats.averageCycle, 28);
  assert.equal(stats.medianCycle, 28);
  assert.equal(stats.averagePeriod, 5);
  assert.equal(stats.cycleDay, 7);
  assert.equal(JSON.stringify(records), before);
});

test('estimation waits for four valid starts and respects pause', () => {
  for (const records of [[], makePeriods('2026-01-01', []), makePeriods('2026-01-01', [28, 28])]) {
    const result = predictNextPeriod(records, '2026-10-08');
    assert.equal(result.available, false);
    assert.equal(result.status, 'insufficient');
    assert.equal(result.start, null);
  }
  assert.equal(predictNextPeriod(makePeriods('2026-01-01', [28, 28, 28]), '2026-10-08', true).status, 'paused');
});

test('median prediction and descriptive shortest-longest range use real starts', () => {
  const records = makePeriods('2026-01-01', [28, 30, 26]);
  const estimate = predictNextPeriod(records, '2026-04-01');
  assert.equal(estimate.available, true);
  assert.equal(estimate.start, '2026-04-23');
  assert.equal(estimate.earliest, '2026-04-21');
  assert.equal(estimate.latest, '2026-04-25');
  assert.equal(estimate.cycleLength, 28);
  assert.equal(estimate.daysUntil, 22);
  assert.equal(estimate.intervalCount, 3);
});

test('past estimates are preserved without invented roll-forward cycles', () => {
  const records = makePeriods('2026-01-01', [28, 30, 26]);
  const estimate = predictNextPeriod(records, '2026-10-08');
  assert.equal(estimate.start, '2026-04-23');
  assert.equal(estimate.status, 'past-window');
  assert.equal(estimate.isOverdue, true);
  assert.ok(estimate.daysUntil < 0);
});

test('recent data quality and variation heuristics withhold predictions', () => {
  for (const intervals of [[14, 28, 28], [28, 91, 28], [22, 43, 28]]) {
    const estimate = predictNextPeriod(makePeriods('2025-01-01', intervals), '2026-10-08');
    assert.equal(estimate.available, false);
    assert.equal(estimate.status, 'variable');
    assert.equal(estimate.start, null);
  }
});

test('only six most recent intervals influence an estimate', () => {
  const records = makePeriods('2025-01-01', [95, 28, 28, 28, 28, 28, 28]);
  const stats = getStats(records, '2026-10-08');
  assert.equal(stats.completedCycles, 7);
  assert.equal(stats.intervals.length, 6);
  assert.equal(stats.averageCycle, 28);
  assert.equal(predictNextPeriod(records, '2026-10-08').available, true);
});

test('an ongoing period supplies a real start but no invented period duration', () => {
  const records = makePeriods('2026-01-01', [28, 28, 28]);
  records.at(-1).end = null;
  const stats = getStats(records, '2026-03-27');
  assert.equal(stats.completedCycles, 3);
  assert.equal(stats.completedPeriods, 3);
  assert.equal(stats.averagePeriod, 5);
  assert.equal(stats.cycleDay, 2);
  assert.equal(predictNextPeriod(records, '2026-03-27').start, '2026-04-23');
});

test('median half days round consistently and the last day of a window is not overdue', () => {
  const records = makePeriods('2026-01-01', [27, 28, 29, 30]);
  const lastStart = records.at(-1).start;
  const latest = addDays(lastStart, 30);
  const estimate = predictNextPeriod(records, latest);
  assert.equal(getStats(records, latest).medianCycle, 28.5);
  assert.equal(estimate.cycleLength, 29);
  assert.equal(estimate.isOverdue, false);
  assert.equal(predictNextPeriod(records, addDays(latest, 1)).isOverdue, true);
});

test('malformed datasets, overlaps and duplicate IDs cannot produce trusted stats', () => {
  const valid = makePeriods('2026-01-01', [28, 28, 28]);
  const malformed = [
    null,
    {},
    [...valid, { id: 'bad', start: '2026-02-30', end: null }],
    [...valid, { id: 'overlap', start: '2026-01-02', end: '2026-01-03' }],
    [...valid, { id: valid[0].id, start: '2026-05-01', end: '2026-05-05' }],
  ];
  for (const records of malformed) {
    assert.equal(getStats(records, '2026-10-08').valid, false);
    const result = predictNextPeriod(records, '2026-10-08');
    assert.equal(result.available, false);
    assert.equal(result.status, 'invalid');
  }
});

test('a 600-period archive is validated, sorted and estimated without changing its input', () => {
  const records = makePeriods('1970-01-01', Array(599).fill(28)).reverse();
  const before = JSON.stringify(records);
  const stats = getStats(records, '2026-10-08');
  assert.equal(stats.valid, true);
  assert.equal(stats.completedCycles, 599);
  assert.equal(stats.completedPeriods, 600);
  assert.deepEqual(stats.intervals, Array(6).fill(28));
  assert.equal(stats.averagePeriod, 5);
  assert.equal(predictNextPeriod(records, '2026-10-08').start, addDays('1970-01-01', 600 * 28));
  assert.equal(JSON.stringify(records), before);
});

test('adjacent validation rejects a containing period and an ongoing period in unsorted imports', () => {
  const containing = [
    { id: 'middle', start: '2026-02-01', end: '2026-02-05' },
    { id: 'last', start: '2026-03-01', end: '2026-03-05' },
    { id: 'outer', start: '2026-01-01', end: '2026-04-01' },
  ];
  assert.deepEqual(getStats(containing, '2026-10-08').errors, [
    'These dates overlap an existing period. Edit that record or choose different dates.',
  ]);
  const ongoing = [
    { id: 'last', start: '2026-03-01', end: '2026-03-05' },
    { id: 'first', start: '2026-01-01', end: null },
  ];
  assert.equal(getStats(ongoing, '2026-10-08').valid, false);
  assert.equal(predictNextPeriod(ongoing, '2026-10-08').status, 'invalid');
  ongoing[0].end = null;
  assert.equal(getStats(ongoing, '2026-10-08').errors[0], 'Finish the existing ongoing period before starting another.');
});
