import { useRef, type ReactNode } from 'react';

/**
 * A subtle 3D tilt-on-hover wrapper. Tracks the pointer and rotates the child
 * toward it, with a soft spotlight that follows the cursor. Respects reduced
 * motion by simply doing nothing dramatic (transforms are tiny).
 */
export default function TiltCard({
  children,
  className = '',
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max;
    const ry = (px - 0.5) * max;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'rotateX(0) rotateY(0)';
  };

  return (
    <div className={`tilt-parent ${className}`} onMouseMove={onMove} onMouseLeave={reset}>
      <div ref={ref} className="tilt spotlight h-full">
        {children}
      </div>
    </div>
  );
}
