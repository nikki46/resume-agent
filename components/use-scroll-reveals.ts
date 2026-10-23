"use client";
import { useEffect } from "react";

export function useScrollReveals() {
  useEffect(() => {
    // Content stays visible without JavaScript or IntersectionObserver.
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.style.setProperty('--reveal-delay', `${Number(element.dataset.revealDelay) || 0}ms`);
        element.classList.add('is-revealed');
        observer.unobserve(element);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
