import { ReactNode } from 'react';

interface WidgetProps {
  children: ReactNode;
}

const Widget = ({ children }: WidgetProps) => {
  return <div className='w-[576px] rounded-xl bg-secondary'>{children}</div>;
};

export default Widget;
