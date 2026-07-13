import { useSyncExternalStore } from 'react';

/**
 * Tiny Web Audio sound kit — no audio files, everything is synthesised so there
 * are no downloads and nothing to ship. Respects a persisted mute preference and
 * only ever plays in response to a user gesture (clicks/toggles), so browsers
 * are happy to resume the AudioContext.
 */

const MUTE_KEY = 'p111_muted';
type Listener = () => void;
const listeners = new Set<Listener>();

let muted = readMuted();
let ctx: AudioContext | null = null;

function readMuted(): boolean {
  try {
    return localStorage.getItem(MUTE_KEY) === '1';
  } catch {
    return false;
  }
}

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

interface ToneOpts {
  from: number;
  to?: number;
  type?: OscillatorType;
  duration?: number;
  gain?: number;
  delay?: number;
}

function tone({ from, to, type = 'sine', duration = 0.08, gain = 0.07, delay = 0 }: ToneOpts) {
  if (muted) return;
  const ac = getCtx();
  if (!ac) return;
  const t0 = ac.currentTime + delay;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, t0);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t0 + duration);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.006);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(g).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

/** A crisp mechanical tick — for ticking a step off a checklist. */
export function playTick() {
  tone({ from: 1500, type: 'square', duration: 0.028, gain: 0.045 });
}

/** A pleasant rising blip — task marked complete. */
export function playToggleOn() {
  tone({ from: 660, to: 990, duration: 0.12, gain: 0.07 });
}

/** A soft falling blip — task marked incomplete. */
export function playToggleOff() {
  tone({ from: 520, to: 320, duration: 0.12, gain: 0.055 });
}

/** A very soft UI click for buttons and links. */
export function playClick() {
  tone({ from: 380, type: 'triangle', duration: 0.03, gain: 0.025 });
}

/** A little three-note flourish for celebratory moments. */
export function playSuccess() {
  tone({ from: 660, duration: 0.1, gain: 0.06 });
  tone({ from: 880, duration: 0.1, gain: 0.06, delay: 0.09 });
  tone({ from: 1320, duration: 0.18, gain: 0.06, delay: 0.18 });
}

export function isMuted(): boolean {
  return muted;
}

export function setMuted(v: boolean) {
  muted = v;
  try {
    localStorage.setItem(MUTE_KEY, v ? '1' : '0');
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function toggleMuted() {
  setMuted(!muted);
  if (!muted) playClick(); // audible confirmation when turning sound back on
}

function subscribe(l: Listener) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

export function useMuted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => muted,
    () => muted,
  );
}
