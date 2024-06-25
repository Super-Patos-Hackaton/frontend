import { Typography } from '@/components/ui/typography';

import { cn } from '@/lib/utils';

interface ProfileCardsProps {
  title?: string;
  containerClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export const ProfileCard = ({
  title,
  containerClassName,
  contentClassName,
  children,
}: ProfileCardsProps) => {
  return (
    <div
      className={cn('rounded-2xl bg-secondary px-6 py-8', containerClassName)}
    >
      <Typography.H2 className='mb-1.5 text-brand-500'>{title}</Typography.H2>

      <div className={cn(contentClassName)}>{children}</div>
    </div>
  );
};
