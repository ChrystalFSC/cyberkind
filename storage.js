import { dateKey, parseDate, validatePeriod } from './cycle-engine.js';

// All records remain in this browser's storage. No network API is used here.
export const STORAGE_KEY = 'cyclekind.records.v1';
const MAX_RECORDS = 10_000;
const MAX_JSON_LENGTH = 12_000_000;
const SYMPTOMS = new Set(['cramps', 'bloating', 'headache', 'fatigue', 'mood', 'breast', 'spotting']);

export function newData() {
  return { version: 1, periods: [], symptoms: [], settings: { pausePredictions: false } };
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function readJson(text) {
  if (typeof text !== 'string' || text.length > MAX_JSON_LENGTH) {
    throw new Error('The backup is too large. Use a Cyclekind backup with at most 10,000 records.');
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('The records are not valid JSON. Choose an unmodified Cyclekind backup.');
  }
}

/**
 * Validate the entire dataset before an import or write. Rebuild every object
 * from known keys so imports cannot inject application settings or properties.
 * Input is not changed. String JSON and already-parsed objects are accepted.
 */
export function validateData(raw, today = dateKey()) {
  if (!parseDate(today)) throw new Error('Today must be a valid calendar date.');
  const source = typeof raw === 'string' ? readJson(raw) : raw;
  if (!isObject(source)) throw new Error('Choose a Cyclekind backup containing a records object.');
  if (source.version !== 1) throw new Error('This backup version is not supported. Expected Cyclekind version 1.');
  if (!Array.isArray(source.periods) || !Array.isArray(source.symptoms)) {
    throw new Error('The backup must contain period records and daily check-ins.');
  }
  if (source.periods.length + source.symptoms.length > MAX_RECORDS) {
    throw new Error('The backup exceeds the limit of 10,000 total records.');
  }
  if (source.settings !== undefined && !isObject(source.settings)) throw new Error('Backup settings must be an object.');
  const pausePredictions = source.settings?.pausePredictions === undefined ? false : source.settings.pausePredictions;
  if (typeof pausePredictions !== 'boolean') throw new Error('The pause estimates setting must be true or false.');

  const ids = new Set();
  const periods = source.periods.map((record, index) => {
    if (!isObject(record)) throw new Error(`Period ${index + 1} must be a record object.`);
    if (typeof record.id !== 'string' || !/^[A-Za-z0-9_-]{1,128}$/.test(record.id)) {
      throw new Error(`Period ${index + 1} has an invalid record ID.`);
    }
    if (ids.has(record.id)) throw new Error('Period record IDs must be unique.');
    ids.add(record.id);
    const period = { id: record.id, start: record.start, end: record.end };
    const result = validatePeriod(period, [], today);
    if (!result.valid) throw new Error(`Period ${index + 1}: ${result.errors[0]}`);
    return period;
  }).sort((a, b) => a.start.localeCompare(b.start));

  // Sorted, already-valid records need only an adjacent overlap check. This
  // also ensures an ongoing period is unique and the newest period in history.
  for (let index = 1; index < periods.length; index++) {
    const result = validatePeriod(periods[index], [periods[index - 1]], today);
    if (!result.valid) throw new Error(result.errors[0]);
  }

  const checkInDates = new Set();
  const symptoms = source.symptoms.map((record, index) => {
    if (!isObject(record)) throw new Error(`Check-in ${index + 1} must be a record object.`);
    if (!parseDate(record.date)) throw new Error(`Check-in ${index + 1} has an invalid date.`);
    if (record.date > today) throw new Error('A daily check-in cannot be recorded in the future.');
    if (checkInDates.has(record.date)) throw new Error('Only one daily check-in can be saved for each date.');
    checkInDates.add(record.date);
    if (!Array.isArray(record.symptoms) || record.symptoms.length > SYMPTOMS.size ||
      record.symptoms.some(symptom => !SYMPTOMS.has(symptom))) {
      throw new Error(`Check-in ${index + 1} contains an unknown symptom.`);
    }
    if (new Set(record.symptoms).size !== record.symptoms.length) throw new Error('A check-in cannot contain duplicate symptoms.');
    if (!(typeof record.severity === 'number' || /^[0-3]$/.test(typeof record.severity === 'string' ? record.severity : ''))) {
      throw new Error('Check-in discomfort must be a whole number from 0 to 3.');
    }
    const severity = Number(record.severity);
    if (!Number.isInteger(severity) || severity < 0 || severity > 3) throw new Error('Check-in discomfort must be a whole number from 0 to 3.');
    if (typeof record.note !== 'string' || record.note.length > 1000) throw new Error('Each check-in note must be text of at most 1,000 characters.');
    return { date: record.date, symptoms: [...record.symptoms], severity, note: record.note };
  }).sort((a, b) => a.date.localeCompare(b.date));

  return { version: 1, periods, symptoms, settings: { pausePredictions } };
}

/**
 * An error never overwrites existing storage. The UI must require an explicit
 * recovery action before allowing writes when this returns a non-null error.
 * Resolve localStorage inside the try: the getter itself may throw in a browser.
 */
export function loadData(storage) {
  try {
    const target = storage === undefined ? globalThis.localStorage : storage;
    if (!target || typeof target.getItem !== 'function') throw new Error('Storage unavailable.');
    const saved = target.getItem(STORAGE_KEY);
    if (saved === null) return { data: newData(), error: null };
    try {
      return { data: validateData(readJson(saved)), error: null };
    } catch (error) {
      return { data: newData(), error: `Saved records could not be opened: ${error.message} Your stored copy has not been changed.` };
    }
  } catch {
    return { data: newData(), error: 'This browser is not allowing access to device storage. Enable site storage, or use a browser that allows it, before recording personal data.' };
  }
}

/** Validate first; a failed write throws so the UI cannot claim records saved. */
export function saveData(data, storage) {
  const normalized = validateData(data);
  try {
    const target = storage === undefined ? globalThis.localStorage : storage;
    if (!target || typeof target.setItem !== 'function') throw new Error('Storage unavailable.');
    target.setItem(STORAGE_KEY, JSON.stringify(normalized));
  } catch {
    throw new Error('Your changes could not be saved on this device. Storage may be full or blocked. Export your existing records before changing browser settings.');
  }
  return normalized;
}

/** A portable, unencrypted backup with only the supported data schema. */
export function makeBackup(data) {
  return JSON.stringify(validateData(data), null, 2);
}
