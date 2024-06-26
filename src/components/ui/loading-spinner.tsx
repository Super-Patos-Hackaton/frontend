import { cn } from '@/lib/utils';

import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

const loadingSpinnerVariants = cva('size-10 animate-spin text-brand-500', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
      xl: 'size-10',
    },
  },
});

type LoadingSpinnerVariants = typeof loadingSpinnerVariants;

interface LoadingSpinnerProps extends VariantProps<LoadingSpinnerVariants> {
  className?: string;
}

export const LoadingSpinner = ({
  className,
  size = 'md',
}: LoadingSpinnerProps) => {
  return (
    <Loader2 className={cn(loadingSpinnerVariants({ className, size }))} />
  );
};
