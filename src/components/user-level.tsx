'use client';

import { CircularProgress } from '@/components/ui/graphElements';

import Widget from './ui/widget';

interface UserLevelProps {
  nextLevelPercentage: number;
  level: number;
}

const UserLevel = ({ nextLevelPercentage, level }: UserLevelProps) => {
  return (
    <Widget>
      <div className='grid grid-cols-2'>
        <div className='h-full w-full content-around'>
          <div className='flex flex-col items-center justify-center border-r-2 border-brand-400 py-12'>
            <h2 className='text-4xl font-bold'>Bichinho</h2>
            <h2 className='text-4xl font-bold'>
              Nível <span className='text-brand-500'>{level}</span>
            </h2>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <CircularProgress
            nextLevelPercentage={nextLevelPercentage}
          ></CircularProgress>
        </div>
      </div>
    </Widget>
  );
};

export default UserLevel;
