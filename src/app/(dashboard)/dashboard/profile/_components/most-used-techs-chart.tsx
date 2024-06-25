'use client';

import Statistics from '@/components/ui/statistics';

import { BarList, ValueFormatter } from '@tremor/react';

const datahero = [
  { name: 'Javascript', value: 80 },
  { name: 'Typescript', value: 68 },
  { name: 'Next.js', value: 30 },
  { name: 'React', value: 49 },
  { name: 'Tailwind', value: 34 },
];

export const MostUsedTechsChart = () => {
  return (
    <>
      <Statistics title='Tecnologias' className='max-w-full flex-1'>
        <BarList
          data={datahero}
          className='mx-auto max-w-sm'
          valueFormatter={(v: ValueFormatter) => `${v}%`}
        />
      </Statistics>
    </>
  );
};
