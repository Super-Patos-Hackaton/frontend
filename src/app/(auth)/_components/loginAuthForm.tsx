import Link from 'next/link';
import { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

const LoginAuthForm = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      data-testid='login-form'
      onSubmit={handleSubmit}
      className='m-auto flex w-1/3 flex-col gap-4'
    >
      <Input
        data-testid='email-input-test'
        type='email'
        name='email'
        placeholder='Email'
        required
      />
      <div>
        <Input
          data-testid='password-input-test'
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <Link href='/recovery' data-testid='recovery-link-test'>
          <Typography.Muted>Recuperar a senha</Typography.Muted>
        </Link>
      </div>
      <Button
        type='submit'
        size='lg'
        data-testid='submit-button-test'
        className='w-full rounded-lg text-lg uppercase'
      >
        Entrar
      </Button>
    </form>
  );
};

export default LoginAuthForm;
