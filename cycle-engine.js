/**
 * Cycle Kind: date-only cycle calculations, with no networking or dependencies.
 * Prediction rules are product heuristics, not a diagnosis or validated clinical
 * prediction model. The displayed window describes recent history, not a
 * statistical confidence interval. It must not be used to estimate fertility.
 */
const DAY_MS = 86_400_000;
const RECENT_INTERVALS = 6;

/** Parse a strict ISO calendar date to UTC midnight; invalid input returns null. */
export function parseDate(key) {
  if (typeof key !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(key)) return null;
  const [year, month, day] = key.split('-').map(Number);
  if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) return null;
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  date.setUTCHours(0, 0, 0, 0);
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
    ? date
    : null;
}

/** Convert a Date's LOCAL calendar day, or validate an existing ISO date key. */
export function dateKey(date = new Date()) {
  if (typeof date === 'string') {
    if (!parseDate(date)) throw new TypeError('Invalid calendar date.');
    return date;
  }
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) throw new TypeError('Invalid date.');
  const result = `${String(date.getFullYear()).padStart(4, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  if (!parseDate(result)) throw new RangeError('Date is outside the supported calendar.');
  return result;
}

/** Calendar arithmetic uses UTC so daylight-saving changes never add a day. */
export function addDays(key, amount) {
  const date = parseDate(key);
  if (!date || !Number.isSafeInteger(amount)) throw new TypeError('A valid date and whole number of days are required.');
  date.setUTCDate(date.getUTCDate() + amount);
  if (Number.isNaN(date.getTime()) || date.getUTCFullYear() < 1 || date.getUTCFullYear() > 9999) {
    throw new RangeError('Result is outside the supported calendar.');
  }
  return date.toISOString().slice(0, 10);
}

/** Signed number of calendar days from a to b. */
export function daysBetween(a, b) {
  const first = parseDate(a);
  const second = parseDate(b);
  if (!first || !second) throw new TypeError('Two valid calendar dates are required.');
  return Math.round((second.getTime() - first.getTime()) / DAY_MS);
}

function periodShapeErrors(period, today) {
  if (!period || typeof period !== 'object' || Array.isArray(period)) return ['Period record must be an object.'];
  const errors = [];
  if (period.id !== undefined && (typeof period.id !== 'string' || !period.id.trim())) errors.push('Record ID must be a nonempty string.');
  if (!parseDate(period.start)) errors.push('Enter a valid start date.');
  if (period.end !== null && !parseDate(period.end)) errors.push('Enter a valid end date or mark the period as ongoing.');
  if (parseDate(period.start) && period.start > today) errors.push('A recorded period cannot start in the future.');
  if (parseDate(period.end) && period.end > today) errors.push('A recorded period cannot end in the future.');
  if (parseDate(period.start) && parseDate(period.end) && period.end < period.start) errors.push('End date must be on or after the start date.');
  return errors;
}

/**
 * Validate before saving; the same ID in existing is excluded when editing.
 * End dates are inclusive. An ongoing record occupies every day after its start.
 */
export function validatePeriod(period, existing = [], today = dateKey()) {
  if (!parseDate(today)) return { valid: false, errors: ['Today must be a valid calendar date.'] };
  if (!Array.isArray(existing)) return { valid: false, errors: ['Existing period records must be a list.'] };
  const errors = periodShapeErrors(period, today);
  if (errors.length) return { valid: false, errors };
  const others = existing.filter(item => !(period.id !== undefined && item?.id === period.id));
  if (others.some(item => periodShapeErrors(item, today).length)) {
    return { valid: false, errors: ['An existing period record is invalid. Review it before saving.'] };
  }
  if (period.end === null && others.some(item => item.end === null)) {
    errors.push('Finish the existing ongoing period before starting another.');
  }
  const end = period.end ?? '9999-12-31';
  if (others.some(item => period.start <= (item.end ?? '9999-12-31') && item.start <= end)) {
    errors.push('These dates overlap an existing period. Edit that record or choose different dates.');
  }
  return { valid: errors.length === 0, errors };
}

function inspectRecords(periods, today) {
  if (!parseDate(today)) return { records: [], errors: ['Today must be a valid calendar date.'] };
  if (!Array.isArray(periods)) return { records: [], errors: ['Period records must be a list.'] };
  const records = [];
  const ids = new Set();
  for (const period of periods) {
    if (period?.id !== undefined && ids.has(period.id)) return { records: [], errors: ['Period record IDs must be unique.'] };
    const errors = periodShapeErrors(period, today);
    if (errors.length) return { records: [], errors };
    records.push(period);
    if (period.id !== undefined) ids.add(period.id);
  }
  records.sort((a, b) => a.start.localeCompare(b.start));
  // After sorting, any overlapping range must overlap its next neighbour.
  // Comparing adjacent records also rejects ongoing records before later starts,
  // without revalidating the entire history for every record on every render.
  for (let index = 1; index < records.length; index++) {
    const result = validatePeriod(records[index], [records[index - 1]], today);
    if (!result.valid) return { records: [], errors: result.errors };
  }
  return { records, errors: [] };
}

function mean(values) {
  return values.length ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length * 10) / 10 : null;
}

function median(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

/** Stats use at most the latest six observed start-to-start intervals. */
export function getStats(periods, today = dateKey()) {
  const { records, errors } = inspectRecords(periods, today);
  const allIntervals = records.slice(1).map((record, index) => daysBetween(records[index].start, record.start));
  const intervals = allIntervals.slice(-RECENT_INTERVALS);
  const completedPeriods = records.filter(record => record.end !== null);
  const durations = completedPeriods.slice(-RECENT_INTERVALS).map(record => daysBetween(record.start, record.end) + 1);
  const lastStart = records.at(-1)?.start ?? null;
  return {
    valid: errors.length === 0,
    errors,
    intervals,
    allIntervals,
    averageCycle: mean(intervals),
    medianCycle: median(intervals),
    averagePeriod: mean(durations),
    shortestCycle: intervals.length ? Math.min(...intervals) : null,
    longestCycle: intervals.length ? Math.max(...intervals) : null,
    completedCycles: allIntervals.length,
    completedPeriods: completedPeriods.length,
    cycleDay: lastStart ? daysBetween(lastStart, today) + 1 : null,
    lastStart,
  };
}

/**
 * A descriptive estimate: last actual start + median of recent intervals.
 * No synthetic cycles are added if this date has passed. Broad data-quality
 * cutoffs (15–90 days, spread <=20 days) deliberately withhold an estimate;
 * they are not medical thresholds or a definition of a healthy cycle.
 */
export function predictNextPeriod(periods, today = dateKey(), paused = false) {
  const stats = getStats(periods, today);
  const base = {
    available: false,
    status: 'insufficient',
    reason: '',
    start: null,
    earliest: null,
    latest: null,
    cycleLength: null,
    intervalCount: stats.intervals.length,
    isOverdue: false,
    daysUntil: null,
    windowLabel: 'Based on your shortest and longest recent cycles; actual dates may fall outside this range.',
  };
  if (!stats.valid) return { ...base, status: 'invalid', reason: 'Review invalid or overlapping records before estimating the next period.' };
  if (paused) return { ...base, status: 'paused', reason: 'Estimates are paused. Your records are still available.' };
  if (stats.completedCycles < 3) {
    return { ...base, reason: 'Log at least four period start dates so there are three completed start-to-start intervals to use.' };
  }
  if (stats.shortestCycle < 15 || stats.longestCycle > 90 || stats.longestCycle - stats.shortestCycle > 20) {
    return { ...base, status: 'variable', reason: 'Your recent dates vary too much, or include a long or short gap, for this simple estimate. Check for missing records; this message is not a diagnosis.' };
  }
  const cycleLength = Math.round(stats.medianCycle);
  // Date helpers also guard imported dates near the supported calendar's end.
  let start;
  let earliest;
  let latest;
  try {
    start = addDays(stats.lastStart, cycleLength);
    earliest = addDays(stats.lastStart, stats.shortestCycle);
    latest = addDays(stats.lastStart, stats.longestCycle);
  } catch {
    return { ...base, status: 'invalid', reason: 'These dates are outside the supported estimation range.' };
  }
  return {
    ...base,
    available: true,
    status: today > latest ? 'past-window' : 'estimated',
    reason: today > latest
      ? 'Your last recorded start is beyond the window suggested by recent history. Log any missing period; the estimate has not been moved forward.'
      : `Estimated from ${stats.intervals.length} recent start-to-start intervals.`,
    start,
    earliest,
    latest,
    cycleLength,
    isOverdue: today > latest,
    daysUntil: daysBetween(today, start),
  };
}
