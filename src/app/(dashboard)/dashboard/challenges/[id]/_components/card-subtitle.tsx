import { cn } from '@/lib/utils';

interface CardSubtitleProps {
  className?: string;
  children: React.ReactNode;
}

export const CardSubtitle = ({ children, className }: CardSubtitleProps) => {
  return (
    <span
      className={cn(
        'relative w-fit text-[18px] text-brand-50 after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:bg-brand-400',
        className
      )}
    >
      {children}
    </span>
  );
};
