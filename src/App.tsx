import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import PhasesIndex from './pages/PhasesIndex';
import PhasePage from './pages/PhasePage';
import AllTasks from './pages/AllTasks';
import TaskPage from './pages/TaskPage';
import ProgressPage from './pages/ProgressPage';
import CaseStudies from './pages/CaseStudies';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFound from './pages/NotFound';
import ScrollProgress from './components/ScrollProgress';
import { useReveal } from './lib/useReveal';
import { playClick } from './lib/sound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Handle the slash-less short form /task84 -> /task/84, else 404. */
function CatchAll() {
  const { pathname } = useLocation();
  const m = pathname.match(/^\/tasks?(\d+)$/i);
  if (m) return <Navigate to={`/task/${m[1]}`} replace />;
  return <NotFound />;
}

/** Subtle UI click on any button/link, unless it opts out with data-nosound. */
function useUiClickSound() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest('a, button, [role="button"]');
      if (!el) return;
      if (el.closest('[data-nosound]')) return;
      playClick();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  useReveal();
  useUiClickSound();

  return (
    <div className="min-h-screen bg-aurora">
      <ScrollProgress />
      <ScrollToTop />
      <Nav onOpenSearch={() => setSearchOpen(true)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phases" element={<PhasesIndex />} />
          <Route path="/phase/:slug" element={<PhasePage />} />
          <Route path="/tasks" element={<AllTasks onOpenSearch={() => setSearchOpen(true)} />} />
          <Route path="/task/:key" element={<TaskPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/:slug" element={<CaseStudyPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="*" element={<CatchAll />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
