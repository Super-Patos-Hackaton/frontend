'use client';

import { usePathname } from 'next/navigation';

import { Typography } from '@/components/ui/typography';

import RecoveryAuthForm from '../_components/recoveryAuthForm';

const RecoveryPage = () => {
  const pathName = usePathname();
  return (
    <div className='flex w-full flex-col'>
      <Typography.H2 className='mb-8 text-center'>
        {pathName === '/login' ? 'Login' : 'Digite seu email'}
      </Typography.H2>
      <RecoveryAuthForm />
    </div>
  );
};

export default RecoveryPage;
