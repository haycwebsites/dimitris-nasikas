import { flushSync } from 'react-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { useContactForm } from '../hayc/use-contact-form';
import { trackEvent } from '../hayc/use-analytics';

/**
 * Site contact form — uses useContactForm (same HAYC backend/analytics as ContactForm)
 * with the Diango .hayc-contact-form layout from the WordPress theme.
 */
export default function SiteContactForm() {
  const { t, config, cp } = useHayc();
  const { contactPageConfig, contactFormConfig, siteConfig } = config;
  const location = useLocation();
  const [subject, setSubject] = useState('');
  const [hiddenErrors, setHiddenErrors] = useState<Set<string>>(new Set());

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
      trackEvent(siteConfig.apiUrl, siteConfig.siteId, 'form_start', location.pathname, {
        form: 'contact',
      });
    }
  };

  const showFieldError = (field: 'name' | 'email' | 'message') =>
    fieldErrors[field] && !hiddenErrors.has(field) ? fieldErrors[field] : undefined;

  const clearFieldError = (field: 'name' | 'email' | 'message') => {
    setHiddenErrors((prev) => new Set(prev).add(field));
  };

  const onSubmit = (e: React.FormEvent) => {
    setHiddenErrors(new Set());
    flushSync(() => {
      let nextMessage = message;
      if (subject.trim()) {
        const prefix = `${t(contactPageConfig.subjectLabel)}: ${subject.trim()}\n\n`;
        nextMessage = nextMessage.startsWith(prefix) ? nextMessage : `${prefix}${nextMessage}`;
      }
      if (!nextMessage.trim()) {
        nextMessage = '-';
      }
      setMessage(nextMessage);
    });
    handleSubmit(e);
  };

  if (submitted) {
    return (
      <div className="contact-form-wrap text-center">
        <h3 {...cp('contactPageConfig.successTitle')}>{t(contactPageConfig.successTitle)}</h3>
        <p className="mb-0 mt-3" {...cp('contactPageConfig.successText')}>
          {t(contactPageConfig.successText)}
        </p>
      </div>
    );
  }

  return (
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
                onChange={(e) => {
                  setName(e.target.value);
                  clearFieldError('name');
                }}
                onFocus={trackFormStart}
                disabled={loading}
                aria-invalid={!!showFieldError('name')}
                aria-describedby={showFieldError('name') ? 'contact-name-error' : undefined}
              />
            </label>
            {showFieldError('name') ? (
              <span id="contact-name-error" className="wpcf7-not-valid-tip" {...cp('contactFormConfig.nameRequired')}>
                {showFieldError('name')}
              </span>
            ) : null}
          </p>

          <p className="hayc-field">
            <label htmlFor="contact-email" {...cp('contactPageConfig.emailLabel')}>
              {t(contactPageConfig.emailLabel)}
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearFieldError('email');
                }}
                onFocus={trackFormStart}
                disabled={loading}
                aria-invalid={!!showFieldError('email')}
                aria-describedby={showFieldError('email') ? 'contact-email-error' : undefined}
              />
            </label>
            {showFieldError('email') ? (
              <span id="contact-email-error" className="wpcf7-not-valid-tip" {...cp('contactFormConfig.emailInvalid')}>
                {showFieldError('email')}
              </span>
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
              onChange={(e) => {
                setMessage(e.target.value);
                clearFieldError('message');
              }}
              onFocus={trackFormStart}
              disabled={loading}
              aria-invalid={!!showFieldError('message')}
              aria-describedby={showFieldError('message') ? 'contact-message-error' : undefined}
            />
          </label>
          {showFieldError('message') ? (
            <span id="contact-message-error" className="wpcf7-not-valid-tip" {...cp('contactFormConfig.messageRequired')}>
              {showFieldError('message')}
            </span>
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
          <p
            className="hayc-field hayc-field-full wpcf7-not-valid-tip"
            role="alert"
            {...cp('contactFormConfig.errorText')}
          >
            {error || t(contactFormConfig.errorText)}
          </p>
        ) : null}
      </form>
    </div>
  );
}
