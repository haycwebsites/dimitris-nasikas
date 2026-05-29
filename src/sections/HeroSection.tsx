import FillButton from '../components/FillButton';
import IncludeBackground from '../components/IncludeBackground';
import { useHayc } from '../hayc/config-context';

export default function HeroSection() {
  const { t, img, config, cp } = useHayc();
  const { heroConfig } = config;

  return (
    <section id="home" className="banner-area banner-2 p-relative">
      <div className="banner-bg-thumb">
        <IncludeBackground src={heroConfig.backgroundImage} className="banner-bg" />
      </div>
      <div className="banner-inner-grid">
        <div className="banner-content-box p-relative">
          <div className="banner-content-2">
            <span className="banner-subtitle-2" {...cp('heroConfig.subtitle')}>
              {t(heroConfig.subtitle)}
            </span>
            <h2 {...cp('heroConfig.title')}>{t(heroConfig.title)}</h2>
            <p {...cp('heroConfig.description')}>{t(heroConfig.description)}</p>
            <FillButton
              href={heroConfig.ctaHref}
              text={heroConfig.ctaText}
              secondary
              configPath="heroConfig.ctaText"
            />
          </div>
        </div>
        <div className="banner-wrapper-2 p-relative">
          <div
            className="banner-thumb-2 bg-black"
            style={{
              backgroundImage: `url(${img(heroConfig.doctorImage)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </div>
    </section>
  );
}
