import type { LocaleString } from '../config';
import { useHayc } from '../hayc/config-context';

export default function FillButton({
  href,
  text,
  secondary = false,
  configPath,
}: {
  href: string;
  text: LocaleString;
  secondary?: boolean;
  configPath: string;
}) {
  const { t, cp } = useHayc();
  const label = t(text);

  return (
    <a
      href={href}
      className={secondary ? 'fill-btn secondary' : 'fill-btn'}
      {...cp(configPath)}
    >
      <span className="fill-btn-inner">
        <span className="fill-btn-normal">
          {label}
          <i className="fa-regular fa-angle-right" aria-hidden="true" />
        </span>
        <span className="fill-btn-hover">
          {label}
          <i className="fa-regular fa-angle-right" aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
