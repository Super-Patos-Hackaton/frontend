import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

export default function AuthForm() {
  const pathName = usePathname();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='m-auto flex w-1/3 flex-col gap-4'>
      {/* Email Input */}
      <Input
        data-testid='email-input-test'
        type='email'
        name='email'
        placeholder='Email'
        required
      />
      {/* Password Input */}
      <div>
        <Input
          data-testid='password-input-test'
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        {/* Recovery Password Link */}
        <Link href='/recovery' data-testid='recovery-link-test'>
          <Typography.Muted>
            {pathName.includes('login') && 'Recuperar a senha'}
          </Typography.Muted>
        </Link>
      </div>
      {/* Form Submit Button */}
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
}
