import { Typography } from '@/components/ui/typography';

import LoginAuthForm from '../_components/loginAuthForm';

const LoginPage = () => {
  return (
    <div className='flex w-full flex-col'>
      <Typography.H2 className='mb-8 text-center'>Login</Typography.H2>
      <LoginAuthForm />
    </div>
  );
};

export default LoginPage;
