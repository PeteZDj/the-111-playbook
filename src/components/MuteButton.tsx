import { Volume2, VolumeX } from 'lucide-react';
import { toggleMuted, useMuted } from '../lib/sound';

export default function MuteButton({ className = '' }: { className?: string }) {
  const muted = useMuted();

  return (
    <button
      data-nosound
      onClick={toggleMuted}
      aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
      title={muted ? 'Sound off' : 'Sound on'}
      aria-pressed={muted}
      className={`p-2 rounded-lg text-muted hover:text-ink hover:bg-surface2 transition pressable ${className}`}
    >
      {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </button>
  );
}
