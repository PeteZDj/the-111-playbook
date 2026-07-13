import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Github } from 'lucide-react';
import { doneCount, useProgress } from '../lib/progress';
import { totalTasks } from '../data/tasks';
import ThemeToggle from './ThemeToggle';
import MuteButton from './MuteButton';

const REPO_URL = 'https://github.com/PeteZDj/the-111-playbook';

export default function Nav({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useProgress();
  const done = doneCount();
  const pct = Math.round((done / totalTasks) * 100);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onOpenSearch]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-xl border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="font-display font-bold text-lg tracking-tight text-ink">
            <span className="text-gradient">111</span>
          </span>
          <span className="hidden sm:block text-sm text-muted group-hover:text-muted transition-colors">
            The Playbook
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link to="/phases" className="px-3 py-2 rounded-lg text-muted hover:text-ink hover:bg-surface2 transition">
            Phases
          </Link>
          <Link to="/tasks" className="px-3 py-2 rounded-lg text-muted hover:text-ink hover:bg-surface2 transition">
            All 111 tasks
          </Link>
          <Link to="/case-studies" className="px-3 py-2 rounded-lg text-muted hover:text-ink hover:bg-surface2 transition">
            Case studies
          </Link>
          <Link to="/progress" className="px-3 py-2 rounded-lg text-muted hover:text-ink hover:bg-surface2 transition">
            My progress
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-surface2 text-muted text-xs hover:text-ink hover:border-line-strong transition"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="ml-1 px-1.5 py-0.5 rounded bg-track text-[10px] font-mono">⌘K</kbd>
          </button>

          <Link
            to="/progress"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-surface2 hover:border-line-strong transition"
            title={`${done} of ${totalTasks} tasks complete`}
          >
            <div className="w-16 h-1.5 rounded-full bg-track overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 to-violet-500" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-xs font-semibold text-ink tabular-nums">{pct}%</span>
          </Link>

          <MuteButton />

          <ThemeToggle />

          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-muted hover:text-ink hover:bg-surface2 transition hover-wiggle"
            aria-label="GitHub repository"
          >
            <Github className="w-5 h-5" />
          </a>

          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-canvas/95 backdrop-blur-xl px-5 py-4 space-y-1">
          {[
            ['Phases', '/phases'],
            ['All 111 tasks', '/tasks'],
            ['Case studies', '/case-studies'],
            ['My progress', '/progress'],
          ].map(([label, to]) => (
            <button
              key={to}
              onClick={() => {
                navigate(to);
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-muted hover:bg-surface2"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenSearch();
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full text-left px-3 py-2.5 rounded-lg text-muted hover:bg-surface2"
          >
            <Search className="w-4 h-4" /> Search
          </button>
          <div className="flex items-center justify-between px-3 py-2.5">
            <span className="text-sm text-muted">Theme</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between px-3 py-2.5">
            <span className="text-sm text-muted">Sound effects</span>
            <MuteButton />
          </div>
        </div>
      )}
    </header>
  );
}
