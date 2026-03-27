'use client';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function ScrollTracker() {
  useEffect(() => {
    const depths = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const percent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      depths.forEach(depth => {
        if (percent >= depth && !reached.has(depth)) {
          reached.add(depth);
          trackEvent('scroll_depth', { event_label: `${depth}%` });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}