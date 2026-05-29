import { useHayc } from '../hayc/config-context';
import SiteContactForm from '../components/SiteContactForm';

export default function ContactSection() {
  const { t, config, cp } = useHayc();
  const { contactPageConfig } = config;

  return (
    <section id="contact" className="contact-area section-space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10 col-xl-11 col-lg-12">
            <div className="section-title-wrapper-2 text-center mb-40">
              <span className="section-subtitle-2 mb-25" {...cp('contactPageConfig.subtitle')}>
                {t(contactPageConfig.subtitle)}
              </span>
              <h2 className="section-title" {...cp('contactPageConfig.title')}>
                {t(contactPageConfig.title)}
              </h2>
              <p className="mt-20 mb-0" {...cp('contactPageConfig.description')}>
                {t(contactPageConfig.description)}
              </p>
            </div>
            <SiteContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
