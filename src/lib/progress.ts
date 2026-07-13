import { useSyncExternalStore } from 'react';

const TASK_KEY = 'p111_done_tasks';
const STEP_KEY = 'p111_done_steps';

type Listener = () => void;
const listeners = new Set<Listener>();
let version = 0;

function emit() {
  version += 1;
  listeners.forEach((l) => l());
}

function subscribe(l: Listener) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function read(key: string): Set<string> {
  if (typeof localStorage === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(key);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function write(key: string, set: Set<string>) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    /* ignore quota / privacy errors */
  }
}

export function isTaskDone(id: number): boolean {
  return read(TASK_KEY).has(String(id));
}

export function toggleTask(id: number) {
  const s = read(TASK_KEY);
  const k = String(id);
  if (s.has(k)) s.delete(k);
  else s.add(k);
  write(TASK_KEY, s);
  emit();
}

export function stepKey(taskId: number, idx: number) {
  return `${taskId}:${idx}`;
}

export function isStepDone(taskId: number, idx: number): boolean {
  return read(STEP_KEY).has(stepKey(taskId, idx));
}

export function toggleStep(taskId: number, idx: number) {
  const s = read(STEP_KEY);
  const k = stepKey(taskId, idx);
  if (s.has(k)) s.delete(k);
  else s.add(k);
  write(STEP_KEY, s);
  emit();
}

export function doneCount(): number {
  return read(TASK_KEY).size;
}

export function phaseDoneCount(ids: number[]): number {
  const s = read(TASK_KEY);
  return ids.filter((id) => s.has(String(id))).length;
}

export function resetAll() {
  write(TASK_KEY, new Set());
  write(STEP_KEY, new Set());
  emit();
}

/** Subscribe to progress changes and re-render (returns a version number). */
export function useProgress(): number {
  return useSyncExternalStore(
    subscribe,
    () => version,
    () => version,
  );
}
