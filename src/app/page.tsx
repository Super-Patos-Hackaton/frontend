import Image from 'next/image';

import FilterChallenge from '@/components/filter-challenge';
import { ThemeSwitcher } from '@/components/theme-switcher';

import logo from '/public/img/logo.png';

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <Image src={logo} alt='Quack Visual!' className='aspect-auto size-32' />
      <span className='text-4xl font-bold'>Quack!</span>
      <FilterChallenge />
      <div className='absolute right-4 top-4'>
        <ThemeSwitcher />
      </div>
    </main>
  );
};

export default Home;
