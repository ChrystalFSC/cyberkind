import test from 'node:test';
import assert from 'node:assert/strict';
import { STORAGE_KEY, newData, validateData, loadData, saveData, makeBackup } from './storage.js';

const TODAY = '2026-10-08';
const period = (id, start, end = start) => ({ id, start, end });
const checkIn = (date = '2026-09-01', extra = {}) => ({ date, symptoms: ['cramps'], severity: 1, note: '', ...extra });
const data = (periods = [], symptoms = []) => ({ ...newData(), periods, symptoms });
function memoryStorage(initial = null) {
  const values = new Map(initial === null ? [] : [[STORAGE_KEY, initial]]);
  return {
    writes: 0,
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { this.writes++; values.set(key, value); },
  };
}

test('empty stores produce independent empty datasets without a write', () => {
  const storage = memoryStorage();
  assert.deepEqual(loadData(storage), { data: newData(), error: null });
  assert.equal(storage.writes, 0);
  const first = newData();
  first.settings.pausePredictions = true;
  first.periods.push({});
  assert.deepEqual(newData(), { version: 1, periods: [], symptoms: [], settings: { pausePredictions: false } });
});

test('complete records survive save, load, export and import without unknown keys', () => {
  const input = data([
    period('oct', '2026-10-01', null),
    { ...period('sep', '2026-09-01', '2026-09-05'), ignored: 'remove' },
  ], [checkIn('2026-09-01', { severity: '2', note: 'A warm bath helped.', ignored: true })]);
  input.settings.pausePredictions = true;
  input.settings.trackerUrl = 'https://example.invalid';
  input.ignored = 'remove';
  const before = JSON.stringify(input);
  const expected = validateData(input, TODAY);
  assert.equal(JSON.stringify(input), before, 'normalization must not mutate its input');
  assert.equal(expected.periods[0].id, 'sep');
  assert.equal(expected.symptoms[0].severity, 2);
  assert.equal(expected.periods[0].ignored, undefined);
  assert.deepEqual(expected.settings, { pausePredictions: true });
  const storage = memoryStorage();
  assert.deepEqual(saveData(input, storage), expected);
  assert.deepEqual(loadData(storage), { data: expected, error: null });
  assert.deepEqual(validateData(makeBackup(expected), TODAY), expected);
});

test('corrupt, blank and unsupported saved content is preserved with an error', () => {
  for (const content of ['{invalid', '', 'null', JSON.stringify({ ...newData(), version: 2 })]) {
    const storage = memoryStorage(content);
    const result = loadData(storage);
    assert.ok(result.error);
    assert.deepEqual(result.data, newData());
    assert.equal(storage.getItem(STORAGE_KEY), content);
    assert.equal(storage.writes, 0);
  }
});

test('blocked storage and quota errors cannot be mistaken for successful saves', () => {
  const denied = { getItem() { throw new DOMException('denied', 'SecurityError'); }, setItem() { throw new DOMException('full', 'QuotaExceededError'); } };
  assert.match(loadData(denied).error, /not allowing access/);
  assert.throws(() => saveData(newData(), denied), /could not be saved/);
  assert.ok(loadData(null).error);
  assert.throws(() => saveData(newData(), null), /could not be saved/);
});

test('a throwing localStorage property getter is handled', () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, get() { throw new DOMException('denied', 'SecurityError'); } });
  try {
    assert.match(loadData().error, /not allowing access/);
    assert.throws(() => saveData(newData()), /could not be saved/);
  } finally {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
    else delete globalThis.localStorage;
  }
});

test('imports reject future, impossible and reversed period dates', () => {
  for (const record of [period('a', '2026-10-09'), period('a', '2026-10-01', '2026-10-09'), period('a', '2026-02-30'), period('a', '2026-09-05', '2026-09-01')]) {
    assert.throws(() => validateData(data([record]), TODAY));
  }
});

test('imports reject duplicate IDs, inclusive overlap and conflicting ongoing records in either order', () => {
  const conflicts = [
    [period('a', '2026-09-01'), period('a', '2026-10-01')],
    [period('a', '2026-09-01', '2026-09-05'), period('b', '2026-09-05', '2026-09-07')],
    [period('a', '2026-09-01', null), period('b', '2026-10-01')],
    [period('a', '2026-09-01', null), period('b', '2026-10-01', null)],
  ];
  for (const records of conflicts) {
    assert.throws(() => validateData(data(records), TODAY));
    assert.throws(() => validateData(data([...records].reverse()), TODAY));
  }
});

test('imports reject duplicate check-in dates, future dates, unsupported symptoms and malformed severity', () => {
  assert.throws(() => validateData(data([], [checkIn(), checkIn()]), TODAY), /one daily check-in/);
  assert.throws(() => validateData(data([], [checkIn('2026-10-09')]), TODAY), /future/);
  assert.throws(() => validateData(data([], [checkIn('2026-02-30')]), TODAY), /invalid date/);
  for (const extra of [{ symptoms: ['unknown'] }, { symptoms: ['cramps', 'cramps'] }, { severity: false }, { severity: null }, { severity: 1.5 }, { severity: '02' }, { severity: 4 }, { note: null }, { note: 'x'.repeat(1001) }]) {
    assert.throws(() => validateData(data([], [checkIn(undefined, extra)]), TODAY));
  }
});

test('unknown object properties are stripped including prototype-shaped JSON keys', () => {
  const normalized = validateData('{"version":1,"periods":[],"symptoms":[],"settings":{"pausePredictions":false,"__proto__":{"injected":true}},"__proto__":{"injected":true}}', TODAY);
  assert.deepEqual(normalized, newData());
  assert.equal({}.injected, undefined);
});

test('oversize imports and invalid settings fail before any storage write', () => {
  const oversized = data(Array(10_001).fill(period('a', '2026-09-01')));
  assert.throws(() => validateData(oversized, TODAY), /10,000/);
  assert.throws(() => validateData(' '.repeat(12_000_001), TODAY), /too large/);
  assert.throws(() => validateData({ ...newData(), settings: { pausePredictions: 'false' } }, TODAY), /true or false/);
  assert.throws(() => validateData({ ...newData(), settings: { pausePredictions: null } }, TODAY), /true or false/);
  assert.throws(() => validateData({ ...newData(), version: '1' }, TODAY), /not supported/);
  const storage = memoryStorage('original');
  assert.throws(() => saveData(oversized, storage), /10,000/);
  assert.equal(storage.writes, 0);
  assert.equal(storage.getItem(STORAGE_KEY), 'original');
});
