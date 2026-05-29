import {
  siteConfig,
  digitalProductsConfig,
  contactFormConfig,
  newsletterFormConfig,
  navigationConfig,
  footerConfig,
  heroConfig,
  aboutConfig,
  servicesConfig,
  biographyConfig,
  hospitalConfig,
  consultationConfig,
  contactPageConfig,
  type DigitalProductsConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  digitalProductsConfig?: DigitalProductsConfig;
  contactFormConfig: typeof contactFormConfig;
  newsletterFormConfig: typeof newsletterFormConfig;
  navigationConfig: typeof navigationConfig;
  footerConfig: typeof footerConfig;
  heroConfig: typeof heroConfig;
  aboutConfig: typeof aboutConfig;
  servicesConfig: typeof servicesConfig;
  biographyConfig: typeof biographyConfig;
  hospitalConfig: typeof hospitalConfig;
  consultationConfig: typeof consultationConfig;
  contactPageConfig: typeof contactPageConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  digitalProductsConfig,
  contactFormConfig,
  newsletterFormConfig,
  navigationConfig,
  footerConfig,
  heroConfig,
  aboutConfig,
  servicesConfig,
  biographyConfig,
  hospitalConfig,
  consultationConfig,
  contactPageConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  // In development, use config.ts directly for instant updates
  if (import.meta.env.DEV) {
    return defaultConfig;
  }

  // In production, fetch from remote config.json
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = await res.json();
    return data as RemoteConfig;
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}
