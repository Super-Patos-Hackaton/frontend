import { ReactNode } from 'react';

interface WidgetProps {
  children: ReactNode;
  className?: string;
}

const Widget = ({ children, className }: WidgetProps) => {
  return (
    <div className={'w-[576px] rounded-xl bg-secondary px-6 py-1 ' + className}>
      {children}
    </div>
  );
};

export default Widget;
