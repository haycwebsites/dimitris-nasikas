import { flushSync } from 'react-dom';
import { useState } from 'react';
import { useHayc } from '../hayc/config-context';
import { useContactForm } from '../hayc/use-contact-form';
import { trackEvent } from '../hayc/use-analytics';

export default function ContactSection() {
  const { t, config, cp } = useHayc();
  const { contactPageConfig, contactFormConfig, siteConfig } = config;
  const [subject, setSubject] = useState('');

  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    hp,
    setHp,
    loading,
    submitted,
    error,
    fieldErrors,
    handleSubmit,
    formStarted,
    setFormStarted,
  } = useContactForm();

  const trackFormStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent(siteConfig.apiUrl, siteConfig.siteId, 'form_start', window.location.pathname, {
        form: 'contact',
      });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    if (subject.trim()) {
      const prefix = `${t(contactPageConfig.subjectLabel)}: ${subject.trim()}\n\n`;
      flushSync(() => {
        setMessage((prev) => (prev.startsWith(prefix) ? prev : `${prefix}${prev}`));
      });
    }
    handleSubmit(e);
  };

  if (submitted) {
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
              </div>
              <div className="contact-form-wrap text-center">
                <h3 {...cp('contactPageConfig.successTitle')}>{t(contactPageConfig.successTitle)}</h3>
                <p className="mb-0 mt-3" {...cp('contactPageConfig.successText')}>
                  {t(contactPageConfig.successText)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            <div className="contact-form-wrap">
              <form className="hayc-contact-form" onSubmit={onSubmit} noValidate>
                <input
                  type="text"
                  name="_hp"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  style={{ display: 'none' }}
                  aria-hidden
                />

                <div className="form-row">
                  <p className="hayc-field">
                    <label htmlFor="contact-name" {...cp('contactPageConfig.nameLabel')}>
                      {t(contactPageConfig.nameLabel)}
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={trackFormStart}
                        disabled={loading}
                        aria-invalid={!!fieldErrors.name}
                      />
                    </label>
                    {fieldErrors.name ? (
                      <span className="wpcf7-not-valid-tip">{fieldErrors.name}</span>
                    ) : null}
                  </p>

                  <p className="hayc-field">
                    <label htmlFor="contact-email" {...cp('contactPageConfig.emailLabel')}>
                      {t(contactPageConfig.emailLabel)}
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={trackFormStart}
                        disabled={loading}
                        aria-invalid={!!fieldErrors.email}
                      />
                    </label>
                    {fieldErrors.email ? (
                      <span className="wpcf7-not-valid-tip">{fieldErrors.email}</span>
                    ) : null}
                  </p>
                </div>

                <p className="hayc-field">
                  <label htmlFor="contact-subject" {...cp('contactPageConfig.subjectLabel')}>
                    {t(contactPageConfig.subjectLabel)}
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      onFocus={trackFormStart}
                      disabled={loading}
                    />
                  </label>
                </p>

                <p className="hayc-field hayc-field-full">
                  <label htmlFor="contact-message" {...cp('contactPageConfig.messageLabel')}>
                    {t(contactPageConfig.messageLabel)}
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={trackFormStart}
                      disabled={loading}
                      aria-invalid={!!fieldErrors.message}
                    />
                  </label>
                  {fieldErrors.message ? (
                    <span className="wpcf7-not-valid-tip">{fieldErrors.message}</span>
                  ) : null}
                </p>

                <p className="hayc-submit-wrap">
                  <input
                    type="submit"
                    value={loading ? t(contactPageConfig.submitting) : t(contactPageConfig.submitButton)}
                    disabled={loading}
                    {...cp('contactPageConfig.submitButton')}
                  />
                </p>

                {error ? (
                  <p className="hayc-field hayc-field-full wpcf7-not-valid-tip" role="alert">
                    {error || t(contactFormConfig.errorText)}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
