import FillButton from '../components/FillButton';
import { useHayc } from '../hayc/config-context';

export default function BiographySection() {
  const { t, config, cp } = useHayc();
  const { biographyConfig } = config;

  return (
    <section id="biography" className="benefit-area bio-area section-space">
      <div className="container">
        <div className="row gy-50">
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="benefit-content-wrap bd-sticky">
              <div className="section-title-wrapper-2 mb-15">
                <span className="section-subtitle-2 mb-25" {...cp('biographyConfig.subtitle')}>
                  {t(biographyConfig.subtitle)}
                </span>
                <h2 className="section-title" {...cp('biographyConfig.title')}>
                  {t(biographyConfig.title)}
                  <br />
                </h2>
              </div>
              <p {...cp('biographyConfig.description')}>{t(biographyConfig.description)}</p>
              <div className="button-wrapper mt-45">
                <FillButton
                  href={biographyConfig.ctaHref}
                  text={biographyConfig.ctaText}
                  configPath="biographyConfig.ctaText"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="faq-wrapper">
              <div className="bd-faq bio-accordion">
                <div className="bd-faq-group">
                  {biographyConfig.items.map((item, index) => (
                    <details
                      key={item.number}
                      className="bio-accordion-item"
                      open={index === 0}
                    >
                      <summary
                        className="bio-accordion-trigger"
                        {...cp(`biographyConfig.items.${index}.title`)}
                      >
                        <span className="accordion-number">{item.number}</span>
                        {t(item.title)}
                      </summary>
                      <div className="accordion-body">
                        {item.paragraphs.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className={pIndex === item.paragraphs.length - 1 ? 'mb-0' : undefined}
                            {...cp(`biographyConfig.items.${index}.paragraphs.${pIndex}`)}
                          >
                            {t(paragraph)}
                          </p>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
