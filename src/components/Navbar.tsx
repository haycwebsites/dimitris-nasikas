import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { useTemplateInit } from '../lib/useTemplateInit';

function NavLink({
  href,
  children,
  onClick,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  );
}

export default function Navbar() {
  useTemplateInit();
  const { t, img, config, cp } = useHayc();
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigationConfig } = config;
  const phoneHref = `tel:${navigationConfig.phone.replace(/\s/g, '')}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={menuOpen ? 'header-mobile-open' : undefined}>
      <div id="header-sticky" className="header-area">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="header-logo">
                  <Link to="/" onClick={closeMenu} {...cp('navigationConfig.logoAlt')}>
                    <img
                      src={img(navigationConfig.logo)}
                      alt={t(navigationConfig.logoAlt)}
                      width={533}
                      height={595}
                      className="w-50"
                    />
                  </Link>
                </div>
                <div className={`mean__menu-wrapper${menuOpen ? ' is-open' : ''}`}>
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {navigationConfig.links.map((link, index) => (
                          <li key={link.href}>
                            <NavLink
                              href={link.href}
                              onClick={closeMenu}
                              {...cp(`navigationConfig.links.${index}.label`)}
                            >
                              {t(link.label)}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex align-items-center justify-content-end">
                <div className="header-action d-none d-lg-inline-flex gap-3">
                  <div className="link-text d-none d-xxl-block me-3">
                    <span aria-hidden="true">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9135 17.6698C12.7689 18.6037 14.9533 19.2771 17.5156 19.5651C18.1375 19.6351 18.6667 19.1369 18.6667 18.5112V16.1792C18.6667 15.682 18.3283 15.2487 17.846 15.1281L14.9284 14.3987C14.5592 14.3064 14.1687 14.4146 13.8996 14.6837L10.9135 17.6698ZM10.9135 17.6698C7.53811 15.9712 5.2518 13.4104 3.76127 10.7387M3.76127 10.7387C2.34118 8.19334 1.64341 5.54728 1.41438 3.45006C1.34788 2.84122 1.84093 2.33331 2.45338 2.33331H4.77855C5.29495 2.33331 5.73956 2.69781 5.84084 3.20418L6.63629 7.18146C6.70733 7.53664 6.59615 7.90382 6.34003 8.15995L3.76127 10.7387Z"
                          stroke="#161616"
                          strokeWidth="2"
                        />
                        <path
                          d="M11.0336 5.68294C12.0995 5.89013 13.0785 6.41286 13.8436 7.18333C14.6087 7.95378 15.1246 8.93645 15.3242 10.0036M11.1883 1.32272C13.3359 1.58642 15.3349 2.55705 16.8703 4.08173C18.4056 5.60642 19.3902 7.59852 19.6688 9.7443"
                          stroke="#EB753B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>
                      <a href={phoneHref} {...cp('navigationConfig.phone')}>
                        {navigationConfig.phone}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="header__hamburger d-lg-none">
                <div className="sidebar__toggle">
                  <button
                    type="button"
                    className="bar-icon"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? t(navigationConfig.menuCloseLabel) : t(navigationConfig.menuOpenLabel)}
                    onClick={() => setMenuOpen((open) => !open)}
                  >
                    <span />
                    <span>
                      <small />
                    </span>
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
