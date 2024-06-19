import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const recoveryFormSchema = z.object({
  email: z.string(),
});

type RecoveryFormSchema = z.infer<typeof recoveryFormSchema>;

const RecoveryAuthForm = () => {
  const { register, handleSubmit } = useForm<RecoveryFormSchema>({
    resolver: zodResolver(recoveryFormSchema),
  });

  return (
    <form
      data-testid='recovery-form'
      className='m-auto flex w-1/3 flex-col gap-4'
    >
      <Input
        data-testid='email-input-test'
        type='email'
        placeholder='Email'
        required
        {...register('email')}
      />
      <Button
        type='submit'
        size='lg'
        data-testid='submit-button-test'
        className='w-full rounded-lg text-lg uppercase'
      >
        Recuperar Senha
      </Button>
    </form>
  );
};

export default RecoveryAuthForm;
