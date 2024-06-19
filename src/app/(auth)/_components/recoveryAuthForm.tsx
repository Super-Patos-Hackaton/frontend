import { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const RecoveryAuthForm = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      data-testid='recovery-form'
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
