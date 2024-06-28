'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { LoadingSpinner } from '@/components/ui/loading-spinner';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <LoadingSpinner size={'xxl'} />
    </main>
  );
};

export default Home;
