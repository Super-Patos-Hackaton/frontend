import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface TypographyProps<_> {
  children: ReactNode;
  className?: string;
}

const H1 = ({ children, className }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  );
};

const H2 = ({ children, className }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, className }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className
      )}
    >
      {children}
    </h3>
  );
};

const P = ({ children, className }: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        'scroll-m-20 pb-2 text-base font-normal tracking-tight first:mt-0',
        className
      )}
    >
      {children}
    </p>
  );
};

const Lead = ({
  children,
  className,
}: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn('text-xl text-muted-foreground', className)}>{children}</p>
  );
};

const Muted = ({
  children,
  className,
}: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  );
};

const Error = ({
  children,
  className,
}: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn('text-sm text-muted-foreground text-red-500', className)}>
      {children}
    </p>
  );
};

export const Typography = { H1, H2, H3, P, Lead, Muted, Error };
