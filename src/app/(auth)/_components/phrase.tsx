'use client';

import { usePathname } from 'next/navigation';

const Phrase = () => {
  const pathName = usePathname();

  return (
    <span className='max-w-[550px] text-balance text-center text-5xl font-black text-secondary'>
      {pathName.includes('login')
        ? 'Seja como um Pato. Calmo na superfície e remando loucamente debaixo d’água'
        : 'Filho de Peixe, Peixinho é'}
    </span>
  );
};

export { Phrase };
