import Image from 'next/image';

import { ThemeSwitcher } from '@/components/theme-switcher';

import logo from '/public/img/logo.png';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <Image src={logo} alt='Quack Visual!' className='aspect-auto size-32' />
      <span className='text-4xl font-bold'>Quack!</span>

      <div className='absolute right-4 top-4'>
        <ThemeSwitcher />
      </div>
    </main>
  );
}
