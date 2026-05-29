import FillButton from '../components/FillButton';
import { useHayc } from '../hayc/config-context';

export default function AboutSection() {
  const { t, img, config, cp } = useHayc();
  const { aboutConfig } = config;

  return (
    <section id="about" className="about-area p-relative section-space p-relative fix">
      {aboutConfig.shapeImage ? (
        <div className="about__shape">
          <img src={img(aboutConfig.shapeImage)} alt="" />
        </div>
      ) : null}
      <div className="container">
        <div className="row g-60 align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about-thumb-wrapper-2 p-relative z-index-11">
              <div className="about-thumb w-img">
                <img
                  src={img(aboutConfig.photo)}
                  alt={t(aboutConfig.photoAlt)}
                  {...cp('aboutConfig.photoAlt')}
                />
              </div>
              <div className="about-experience">
                <h2 {...cp('aboutConfig.experienceYear')}>{t(aboutConfig.experienceYear)}</h2>
                <p {...cp('aboutConfig.experienceText')}>{t(aboutConfig.experienceText)}</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about-content-box-2">
              <div className="section-title-wrapper-2 mb-15">
                <span className="section-subtitle-2 mb-25" {...cp('aboutConfig.subtitle')}>
                  {t(aboutConfig.subtitle)}
                </span>
                <h2 className="section-title" {...cp('aboutConfig.title')}>
                  {t(aboutConfig.title)}
                </h2>
              </div>
              <p {...cp('aboutConfig.description')}>{t(aboutConfig.description)}</p>
              <div className="about-highlights">
                {aboutConfig.highlights.map((item, index) => (
                  <div key={item.title.el} className="about-highlight-item">
                    <h5 {...cp(`aboutConfig.highlights.${index}.title`)}>{t(item.title)}</h5>
                    <p {...cp(`aboutConfig.highlights.${index}.text`)}>{t(item.text)}</p>
                  </div>
                ))}
              </div>
              <div className="button-wrapper mt-45">
                <FillButton
                  href={aboutConfig.bioButtonHref}
                  text={aboutConfig.bioButtonText}
                  secondary
                  configPath="aboutConfig.bioButtonText"
                />
                <a
                  href={aboutConfig.contactLinkHref}
                  className="text-btn"
                  {...cp('aboutConfig.contactLinkText')}
                >
                  {t(aboutConfig.contactLinkText)}{' '}
                  <span>
                    <i className="fa-regular fa-angle-right" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
