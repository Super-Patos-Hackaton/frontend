'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from './ui/button';
import { BarProgress } from './ui/graphElements';
import Widget from './ui/widget';

interface ChallengesCompletionProps {
  totalChallengePercentage: number;
  nextChallengeDate: string;
  classname?: string;
}

const ChallengesCompletion = ({
  totalChallengePercentage,
  nextChallengeDate,
  classname,
}: ChallengesCompletionProps) => {
  return (
    <Widget className={classname}>
      <div className='content-around px-6 py-12'>
        <div className=''>
          <div className='mb-6 grid grid-cols-3 border-b border-brand-400'>
            <div className='col-span-2 items-center justify-center'>
              <BarProgress
                totalChallengePercentage={30}
                barLabel={'Total de desafios completos'}
              />
            </div>
            <div className='flex-cols flex items-center justify-center'>
              <h3 className='text-5xl'>{totalChallengePercentage}%</h3>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='items- col-span-2 flex items-center font-bold'>
            <p className='text-brand-300'>
              Data da próxima entrega:{' '}
              <span className='text-brand-400'>{nextChallengeDate}</span>
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <Link href='/dashboard/challenges'>
              <Button
                className='rounded-lg border-2 border-brand-500 bg-[#3c3634] font-bold uppercase text-brand-500 hover:bg-[#3c3634]/[0.8]'
                data-testid='other-challenges-button'
              >
                Mais Desafios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default ChallengesCompletion;
