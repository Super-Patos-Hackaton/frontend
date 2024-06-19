'use client';

import Image from 'next/image';

import { Typography } from '@/components/ui/typography';

import AuthForm from '../_components/authForm';
import logo from '/public/img/logo.png';

const LoginPage = () => {
  return (
    <div className='flex w-full flex-col'>
      <Typography.H2 className='mb-8 text-center'>Login</Typography.H2>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
