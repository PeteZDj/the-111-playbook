import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchTasks } from '../data/tasks';
import { phaseById } from '../data/phases';

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const results = q ? searchTasks(q).slice(0, 12) : [];

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;

  const go = (slug: string) => {
    navigate(`/task/${slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-2xl border border-white/15 bg-[#0d1226] shadow-2xl overflow-hidden animate-fadeUp">
        <div className="flex items-center gap-3 px-4 border-b border-white/10">
          <Search className="w-5 h-5 text-slate-500" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search 111 tasks — e.g. SEO, retention, pitch deck…"
            className="flex-1 bg-transparent py-4 text-white placeholder:text-slate-500 outline-none"
          />
          <button onClick={onClose} className="p-1.5 text-slate-500 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto">
          {q && results.length === 0 && (
            <div className="px-4 py-10 text-center text-slate-500 text-sm">No tasks match “{q}”.</div>
          )}
          {results.map((t) => {
            const p = phaseById(t.phase)!;
            return (
              <button
                key={t.id}
                onClick={() => go(t.slug)}
                className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/5 border-b border-white/5"
              >
                <span
                  className="text-[11px] font-bold tabular-nums px-1.5 py-0.5 rounded mt-0.5"
                  style={{ color: p.color, backgroundColor: `${p.color}1a` }}
                >
                  #{t.id}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white truncate">{t.title}</span>
                  <span className="block text-xs text-slate-500 truncate">{t.goal}</span>
                </span>
              </button>
            );
          })}
          {!q && (
            <div className="px-4 py-6 text-sm text-slate-500">
              Type to search across all 111 tasks, guides, tools and checklists.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
