import { useEffect } from 'react';
import { useHayc } from '../hayc/config-context';

export default function SiteMeta() {
  const { t, config, locale } = useHayc();

  useEffect(() => {
    const { siteConfig } = config;
    document.title = t(siteConfig.title);
    document.documentElement.lang = locale;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', t(siteConfig.description));
    setMeta('keywords', t(siteConfig.keywords));

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', siteConfig.ogImage.startsWith('http')
      ? siteConfig.ogImage
      : `${window.location.origin}${siteConfig.ogImage}`);
  }, [t, config, locale]);

  return null;
}
