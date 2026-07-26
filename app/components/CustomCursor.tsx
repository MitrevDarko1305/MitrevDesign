'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const dot = cursorDot.current;
    const ring = cursorRing.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a, button, [data-cursor]');
      if (target) {
        setIsHovering(true);
        setLabel(target.getAttribute('data-cursor') || '');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a, button, [data-cursor]');
      if (target) {
        setIsHovering(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={cursorDot}
        className={`fixed z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ left: '-100px', top: '-100px' }}
      >
        <div className="w-2 h-2 rounded-full bg-purple-400" />
      </div>

      <div
        ref={cursorRing}
        className={`fixed z-[998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ left: '-100px', top: '-100px' }}
      >
        <div className={`rounded-full border transition-all duration-300 flex items-center justify-center ${
          isHovering
            ? 'w-16 h-16 border-purple-400 bg-purple-400/10'
            : 'w-8 h-8 border-purple-400/50'
        }`}>
          {label && (
            <span className="text-[9px] tracking-[2px] uppercase text-purple-400 font-medium">
              {label}
            </span>
          )}
        </div>
      </div>
    </>
  );
}