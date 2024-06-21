'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { Button } from './ui/button';
import { BarProgress } from './ui/graphElements';
import Widget from './ui/widget';

interface ChallengesCompletionProps {
  totalChallengePercentage: number;
  nextChallengeDate: string;
}

const ChallengesCompletion = (
  challengesCompletionProps: ChallengesCompletionProps
) => {
  const [totalChallengepercentage] = useState<number>(
    challengesCompletionProps.totalChallengePercentage
  );
  const [nextChallengeDate] = useState<string>(
    challengesCompletionProps.nextChallengeDate
  );

  return (
    <Widget>
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
              <h3 className='text-5xl'>{totalChallengepercentage}%</h3>
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
            <Link href='/desafios'>
              <Button className='rounded-lg border-2 border-brand-500 bg-[#3c3634] font-bold uppercase text-brand-500 hover:bg-[#3c3634]/[0.8]'>
                Outros Desafios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default ChallengesCompletion;
