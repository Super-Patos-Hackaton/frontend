import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

export default function AuthForm() {
  const pathName = usePathname();

  //const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //console.log('form submitted');
  }

  return (
    <form onSubmit={handleSubmit} className='m-auto flex w-1/3 flex-col gap-4'>
      {/* Email Input */}
      <Input type='email' name='email' placeholder='Email' required />
      {/* Password Input */}
      <div>
        <Input
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        {/* Recovery Password Link */}
        <Link href='/recovery'>
          <Typography.Muted>
            {pathName.includes('login') && 'Recuperar a senha'}
          </Typography.Muted>
        </Link>
      </div>
      {/* Form Submit Button */}
      <Button
        type='submit'
        size='lg'
        className='w-full rounded-lg text-lg uppercase'
      >
        Entrar
      </Button>
    </form>
  );
}
