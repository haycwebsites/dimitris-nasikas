import { useHayc } from '../hayc/config-context';

export default function IncludeBackground({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const { img } = useHayc();

  if (!src) return null;

  return (
    <div
      className={className ? `include-bg ${className}` : 'include-bg'}
      style={{ backgroundImage: `url(${img(src)})` }}
    />
  );
}
