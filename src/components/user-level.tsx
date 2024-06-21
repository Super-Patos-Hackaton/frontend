'use client';

import React, { useState } from 'react';

import { CircularProgress } from '@/components/ui/graphElements';

import Widget from './ui/widget';

interface ScoreProps {
  nextLevel: number;
  level: number;
}

const UserLevel = (scoreProps: ScoreProps) => {
  const [nextLevel] = useState<number>(scoreProps.nextLevel);
  const [level] = useState<number>(scoreProps.level);

  return (
    <Widget>
      <div className='grid grid-cols-2'>
        <div className='h-full w-full content-around'>
          <div className='flex flex-col items-center justify-center border-r-2 border-brand-400 py-12'>
            <h2 className='text-4xl font-bold uppercase'>Bichinho</h2>
            <h2 className='text-4xl font-bold uppercase'>
              Nível <span className='text-brand-500'>{level}</span>
            </h2>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <CircularProgress>{nextLevel}</CircularProgress>
        </div>
      </div>
    </Widget>
  );
};

export default UserLevel;
