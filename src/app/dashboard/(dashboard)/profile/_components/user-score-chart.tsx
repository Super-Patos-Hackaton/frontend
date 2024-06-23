'use client';

import Statistics from '@/components/ui/statistics';

import { ProgressCircle } from '@tremor/react';

const value = 81;

export const UserScoreChart = () => {
  return (
    <Statistics title='Bichinhos Score' className='max-w-full flex-1'>
      <div className='lex-col mx-auto flex flex-col items-center justify-center gap-6'>
        <ProgressCircle size='xl' value={value} radius={120} strokeWidth={25}>
          <span className='font-mono text-6xl font-black tracking-wide text-brand-50'>
            {value}
          </span>
        </ProgressCircle>

        <div className='text-brand-300'>
          <strong>
            Atualização em:
            <span className='block text-center font-normal leading-4'>
              24 Mai, 2024
            </span>
          </strong>
        </div>
      </div>
    </Statistics>
  );
};
