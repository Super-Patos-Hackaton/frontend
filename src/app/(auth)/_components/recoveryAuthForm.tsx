import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const recoveryFormSchema = z.object({
  email: z
    .string()
    .min(1, 'É necessário informar um e-mail')
    .email('Endereço de e-mail inválido'),
});

type RecoveryFormSchema = z.infer<typeof recoveryFormSchema>;

const RecoveryAuthForm = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RecoveryFormSchema>({
    resolver: zodResolver(recoveryFormSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<RecoveryFormSchema> = () => {
    router.push('/login');
  };

  return (
    <form
      data-testid='recovery-form'
      className='m-auto flex w-1/3 flex-col gap-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          data-testid='email-input-test'
          type='text'
          placeholder='Email'
          {...register('email')}
        />
        <ErrorMessage
          as={Typography.Error}
          className='text-destructive'
          errors={errors}
          name='email'
        />
      </div>
      <Button
        type='submit'
        size='lg'
        data-testid='submit-button-test'
        className='w-full rounded-lg text-lg font-medium'
      >
        recuperar senha
      </Button>
    </form>
  );
};

export default RecoveryAuthForm;
