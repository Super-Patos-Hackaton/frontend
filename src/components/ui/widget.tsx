import { ReactNode } from 'react';

interface CardContent {
  children: ReactNode;
}

const Widget = ({ children }: CardContent) => {
  return (
    <div className='max-w-[576px] rounded-xl bg-secondary'>{children}</div>
  );
};

export default Widget;
