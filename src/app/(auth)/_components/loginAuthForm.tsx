import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'É necessário informar um e-mail')
    .email('Endereço de e-mail inválido'),
  currentPassword: z
    .string()
    .min(1, 'É necessário informar uma senha')
    .regex(
      passRegex,
      'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial'
    ),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

const LoginAuthForm = () => {
  const router = useRouter();

  const { register, formState, handleSubmit } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = () => {
    router.push('/');
  };

  return (
    <form
      data-testid='login-form'
      className='m-auto flex w-1/3 flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          data-testid='email-input-test'
          type='text'
          placeholder='Email'
          className='text-brand-50'
          {...register('email')}
        />
        <ErrorMessage
          as={Typography.Error}
          errors={formState.errors}
          className='text-destructive'
          name='email'
        />
      </div>
      <div>
        <Input
          data-testid='password-input-test'
          type='password'
          placeholder='Password'
          autoComplete='on'
          {...register('currentPassword')}
        />
        <ErrorMessage
          as={Typography.Error}
          errors={formState.errors}
          className='text-destructive'
          name='currentPassword'
        />
        <Link href='/recovery' data-testid='recovery-link-test'>
          <Typography.Muted className='ml-1 mt-1 text-brand-400 hover:text-brand-500'>
            Recuperar senha
          </Typography.Muted>
        </Link>
      </div>
      <Button
        type='submit'
        size='lg'
        data-testid='submit-button-test'
        className='w-full rounded-lg text-lg'
      >
        entrar
      </Button>
    </form>
  );
};

export default LoginAuthForm;
