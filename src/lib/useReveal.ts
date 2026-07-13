import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On every route change, find elements marked with `data-reveal` and reveal them
 * as they scroll into view (adds `.in-view`). Elements already on-screen reveal
 * immediately. One shared observer keeps it cheap.
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.in-view)'));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    // Small delay so freshly-mounted route content exists before we observe.
    const t = window.setTimeout(() => {
      els.forEach((el) => io.observe(el));
    }, 30);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);
}
