import { getToolIconUrl, hasToolIcon } from '../lib/tools';

interface TechIconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTooltip?: boolean;
}

const sizes = {
  sm: 'h-5 w-5',
  md: 'h-7 w-7',
  lg: 'h-9 w-9',
  xl: 'h-11 w-11',
};

const containerSizes = {
  sm: 'h-10 w-10 p-1.5',
  md: 'h-12 w-12 p-2',
  lg: 'h-14 w-14 p-2.5',
  xl: 'h-16 w-16 p-3',
};

export default function TechIcon({
  name,
  size = 'md',
  className = '',
  showTooltip = true,
}: TechIconProps) {
  if (!hasToolIcon(name)) {
    return (
      <span
        title={showTooltip ? name : undefined}
        className={`inline-flex ${containerSizes[size]} items-center justify-center rounded-lg border border-border bg-white text-[10px] font-bold uppercase text-slate-700 shadow-sm ${className}`}
      >
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <span
      title={showTooltip ? name : undefined}
      className={`group/icon inline-flex ${containerSizes[size]} items-center justify-center rounded-lg border border-white/10 bg-white shadow-md shadow-black/20 transition hover:scale-105 hover:shadow-lg hover:shadow-cyan/10 ${className}`}
    >
      <img
        src={getToolIconUrl(name)}
        alt={name}
        className={`${sizes[size]} object-contain`}
        loading="lazy"
        draggable={false}
      />
    </span>
  );
}

interface TechIconRowProps {
  tools: string[];
  size?: TechIconProps['size'];
  gap?: string;
}

export function TechIconRow({ tools, size = 'md', gap = 'gap-3' }: TechIconRowProps) {
  return (
    <div className={`flex flex-wrap items-center ${gap}`}>
      {tools.map((tool) => (
        <TechIcon key={tool} name={tool} size={size} />
      ))}
    </div>
  );
}
