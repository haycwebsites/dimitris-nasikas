import { useEffect, useState } from 'react';
import { useHayc } from '../hayc/config-context';

export default function BackToTop() {
  const { t, config, cp } = useHayc();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`backtotop-wrap cursor-pointer${visible ? ' active-progress' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={t(config.siteConfig.backToTopLabel)}
      {...cp('siteConfig.backToTopLabel')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
    >
      <svg className="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
