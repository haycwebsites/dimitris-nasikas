import FillButton from '../components/FillButton';
import IncludeBackground from '../components/IncludeBackground';
import { useHayc } from '../hayc/config-context';

export default function ServicesSection() {
  const { t, img, config, cp } = useHayc();
  const { servicesConfig } = config;

  return (
    <section id="services" className="service-area p-relative fix">
      <div className="service-bg">
        <IncludeBackground src={servicesConfig.backgroundImage} className="service-bg-thumb" />
      </div>
      <div className="container">
        <div className="service-title-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div className="title-inner mb-15 d-flex align-items-end">
                <h2 className="service-title p-relative" {...cp('servicesConfig.mainTitle')}>
                  {t(servicesConfig.mainTitle)}
                </h2>
                <div className="health-icon-2 d-none d-md-block">
                  <span>
                    <img src={img(servicesConfig.iconImage)} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="title-wrapper">
                <p className="mb-0" {...cp('servicesConfig.description')}>
                  {t(servicesConfig.description)}
                </p>
                <h2 className="service-title" {...cp('servicesConfig.secondaryTitle')}>
                  {t(servicesConfig.secondaryTitle)}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="service-btn-wrapper">
                <div className="section-title-wrapper-2 is-white">
                  <span className="section-subtitle-2" {...cp('servicesConfig.subtitle')}>
                    {t(servicesConfig.subtitle)}
                  </span>
                </div>
                <FillButton
                  href={servicesConfig.ctaHref}
                  text={servicesConfig.ctaText}
                  secondary
                  configPath="servicesConfig.ctaText"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container nas-services-wrap">
        <div className="nas-services-grid">
          {servicesConfig.items.map((item, index) => (
            <div key={item.number} className="nas-service-card">
              <span className="nas-service-number">{item.number}</span>
              <h5 {...cp(`servicesConfig.items.${index}.title`)}>{t(item.title)}</h5>
              <p {...cp(`servicesConfig.items.${index}.description`)}>{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
