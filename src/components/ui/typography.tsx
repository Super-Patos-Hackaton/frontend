import { cn } from "@/lib/utils";
import { ReactNode, Ref } from "react";

interface TypographyProps<T> {
  children: ReactNode;
  className: string;
  ref: Ref<T>;
}

export const H1 = ({
  children,
  className,
  ref,
}: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
  ref,
}: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className,
  ref,
}: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const p = ({
  children,
  className,
  ref,
}: TypographyProps<HTMLHeadingElement>) => {
  return (
    <p
      ref={ref}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </p>
  );
};
