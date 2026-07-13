import { Moon, Sun } from 'lucide-react';
import { toggleTheme, useTheme } from '../lib/theme';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const theme = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`relative inline-flex items-center h-8 w-14 rounded-full border border-line bg-surface2 pressable transition-colors ${className}`}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-violet-500 text-white shadow transition-all duration-300 ${
          isDark ? 'left-[calc(100%-1.625rem)]' : 'left-1'
        }`}
      >
        {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
      </span>
    </button>
  );
}
