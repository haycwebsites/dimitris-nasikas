import FillButton from '../components/FillButton';
import IncludeBackground from '../components/IncludeBackground';
import { useHayc } from '../hayc/config-context';

export default function ConsultationSection() {
  const { t, config, cp } = useHayc();
  const { consultationConfig } = config;

  return (
    <div id="consultation" className="intro-area section-space p-relative">
      <div className="intro-bg">
        <IncludeBackground src={consultationConfig.backgroundImage} className="intro-bg-thumb" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div className="section-title-wrapper is-white text-center">
              <h2 className="section-title section-title-spacing" {...cp('consultationConfig.title')}>
                {t(consultationConfig.title)}
              </h2>
              <FillButton
                href={consultationConfig.ctaHref}
                text={consultationConfig.ctaText}
                secondary
                configPath="consultationConfig.ctaText"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
