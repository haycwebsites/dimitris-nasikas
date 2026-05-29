import FillButton from '../components/FillButton';
import { useHayc } from '../hayc/config-context';

export default function HospitalSection() {
  const { t, img, config, cp } = useHayc();
  const { hospitalConfig } = config;

  return (
    <section id="affiliated-hospital" className="about-area affiliation-area p-relative section-space fix">
      {hospitalConfig.shapeImage ? (
        <div className="about__shape">
          <img src={img(hospitalConfig.shapeImage)} alt="" />
        </div>
      ) : null}
      <div className="container">
        <div className="row g-60 align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about-content-box-2">
              <div className="section-title-wrapper-2 mb-15">
                <span className="section-subtitle-2 mb-25" {...cp('hospitalConfig.subtitle')}>
                  {t(hospitalConfig.subtitle)}
                </span>
                <h2 className="section-title" {...cp('hospitalConfig.title')}>
                  {t(hospitalConfig.title)}
                </h2>
              </div>
              <p {...cp('hospitalConfig.description')}>{t(hospitalConfig.description)}</p>
              <div className="button-wrapper mt-45">
                <FillButton
                  href={hospitalConfig.ctaHref}
                  text={hospitalConfig.ctaText}
                  secondary
                  configPath="hospitalConfig.ctaText"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about-highlights affiliation-highlights">
              {hospitalConfig.highlights.map((item, index) => (
                <div key={item.title.el} className="about-highlight-item">
                  <h5 {...cp(`hospitalConfig.highlights.${index}.title`)}>{t(item.title)}</h5>
                  <p {...cp(`hospitalConfig.highlights.${index}.text`)}>{t(item.text)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
