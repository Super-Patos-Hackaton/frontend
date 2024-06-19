import Link from 'next/link';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const loginFormSchema = z.object({
  email: z.string(),
  currentPassword: z.string(),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

const LoginAuthForm = () => {
  const { register, handleSubmit } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form data-testid='login-form' className='m-auto flex w-1/3 flex-col gap-4'>
      <Input
        data-testid='email-input-test'
        type='email'
        placeholder='Email'
        required
        {...register('email')}
      />
      <div>
        <Input
          data-testid='password-input-test'
          type='password'
          placeholder='Password'
          required
          autoComplete='on'
          {...register('currentPassword')}
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
