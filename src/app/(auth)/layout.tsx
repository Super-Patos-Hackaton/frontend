import Image from 'next/image';
import { ReactNode } from 'react';

import { Typography } from '@/components/ui/typography';

import { Phrase } from './_components/phrase';
import logo from '/public/img/logo.png';

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className='grid h-screen grid-cols-2'>
      <div className='flex h-full flex-col items-center justify-center bg-login-background-image bg-cover'>
        <Phrase />
      </div>

      <div className='flex flex-col items-center justify-center bg-secondary'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
