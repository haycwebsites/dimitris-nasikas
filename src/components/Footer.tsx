import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';

function FooterHref({
  href,
  external,
  children,
  ...props
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (external || href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  if (href.startsWith('/') && !href.includes('#')) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

function FooterIcon({ icon }: { icon: 'location' | 'envelope' | 'doctor' }) {
  if (icon === 'envelope') {
    return <i className="fa-solid fa-envelope" aria-hidden="true" />;
  }

  if (icon === 'doctor') {
    return <i className="fa-solid fa-user-doctor" aria-hidden="true" />;
  }

  return <i className="fa-solid fa-location-dot" aria-hidden="true" />;
}

export default function Footer() {
  const { t, img, config, cp } = useHayc();
  const { footerConfig } = config;

  return (
    <footer>
      <div className="footer-area footer-bg section-space-medium">
        <div className="container">
          <div className="row gy-50 justify-content-between">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer-col-1">
                <div className="footer-logo mb-35">
                  <FooterHref href="/#home" {...cp('footerConfig.logoAlt')}>
                    <img
                      src={img(footerConfig.logo)}
                      alt={t(footerConfig.logoAlt)}
                      width={100}
                      height={150}
                    />
                  </FooterHref>
                </div>
                <p {...cp('footerConfig.description')}>{t(footerConfig.description)}</p>
              </div>
              <div className="footer__opening d-flex align-items-start">
                <div className="footer-opening-icon mr-15">
                  <span aria-hidden="true">
                    <svg
                      width="36"
                      height="33"
                      viewBox="0 0 36 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3525 8.27969L28.1441 29.1907C27.7732 30.7516 26.3823 31.8335 24.7749 31.8335H4.4667C2.13296 31.8335 0.463822 29.546 1.1593 27.305L7.66595 6.40966C8.11415 4.95687 9.45877 3.95215 10.9734 3.95215H29.9833C31.4516 3.95215 32.6725 4.84856 33.1826 6.08498C33.4762 6.74955 33.538 7.50692 33.3525 8.27969Z"
                        stroke="#EB753B"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.1895 31.8329H31.5771C33.5708 31.8329 35.1318 30.1482 34.9927 28.1545L33.4626 7.10449"
                        stroke="#EB753B"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.4199 7.69318L16.0273 1.0166"
                        stroke="#EB753B"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.7734 7.70752L26.2262 1"
                        stroke="#EB753B"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3594 16.3779H23.7236"
                        stroke="#EB753B"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.81445 22.5596H22.1787"
                        stroke="#EB753B"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="footer-opening-content">
                  <h4 {...cp('footerConfig.openingTitle')}>{t(footerConfig.openingTitle)}</h4>
                  <p {...cp('footerConfig.openingText')}>{t(footerConfig.openingText)}</p>
                </div>
              </div>
            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget footer-col-2">
                <div className="footer-widget-title">
                  <h4 {...cp('footerConfig.menuTitle')}>{t(footerConfig.menuTitle)}</h4>
                </div>
                <div className="footer-link">
                  <ul>
                    {footerConfig.menuLinks.map((link, index) => (
                      <li key={link.href}>
                        <FooterHref
                          href={link.href}
                          {...cp(`footerConfig.menuLinks.${index}.label`)}
                        >
                          {t(link.label)}
                        </FooterHref>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer-col-4">
                <div className="footer-widget-title">
                  <h4 {...cp('footerConfig.contactTitle')}>{t(footerConfig.contactTitle)}</h4>
                </div>
                <div className="footer-info mb-35">
                  {footerConfig.contactItems.map((item, index) => (
                    <div key={item.href ?? index} className="footer-info-item d-flex align-items-start">
                      <div className="footer-info-icon mr-20">
                        <span>
                          <FooterIcon icon={item.icon} />
                        </span>
                      </div>
                      <div className="footer-info-text">
                        {item.href ? (
                          <FooterHref
                            href={item.href}
                            external={item.external}
                            {...cp(`footerConfig.contactItems.${index}.text`)}
                          >
                            {t(item.text)}
                          </FooterHref>
                        ) : (
                          <span {...cp(`footerConfig.contactItems.${index}.text`)}>
                            {t(item.text)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="footer-info-item d-flex align-items-start">
                    <div className="footer-info-icon mr-20">
                      <span>
                        <FooterIcon icon="doctor" />
                      </span>
                    </div>
                    <div className="footer-info-text">
                      <span>
                        <span {...cp('footerConfig.doctorName')}>{t(footerConfig.doctorName)}</span>
                        <br />
                        <span {...cp('footerConfig.doctorRole')}>{t(footerConfig.doctorRole)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fotter-bottom theme-bg-1 pt-25 pb-25">
        <div className="footer-copyright-text text-center">
          <div>
            <p className="mb-0">
              <span className="color-gray" {...cp('footerConfig.copyrightText')}>
                {t(footerConfig.copyrightText)}{' '}
              </span>
              <a
                href={footerConfig.creditLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                {...cp('footerConfig.creditLinkText')}
              >
                {t(footerConfig.creditLinkText)}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
