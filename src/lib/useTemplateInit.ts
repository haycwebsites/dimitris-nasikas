import { useEffect } from 'react';

export function useTemplateInit() {
  useEffect(() => {
    const header = document.getElementById('header-sticky');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 200);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
