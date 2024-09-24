import { Card, ProgressBar } from '@tremor/react';

interface CircularProgressionProps {
  nextLevelPercentage: number;
}

interface BarProgressionProps {
  totalChallengePercentage: number;
  barLabel: string;
}

const CircularProgress = ({
  nextLevelPercentage,
}: CircularProgressionProps) => {
  return (
    <div className='relative max-w-[268px] p-5'>
      <svg className='h-full w-full' viewBox='0 0 100 100'>
        <circle
          className='stroke-current text-brand-300'
          strokeWidth='12'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
        ></circle>
        <style>{`.progress-ring__circle{transition: stroke-dashoffset 0.35s; transform: rotate(-90deg); transform-origin: 50% 50%;}`}</style>
        <circle
          className='.progress-ring__circle stroke-12 stroke-current text-brand-500'
          strokeWidth='12'
          strokeLinecap='round'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
          strokeDasharray='251.2'
          strokeDashoffset={`calc(251.2 - (251.2 * ${nextLevelPercentage}) / 100)`}
        ></circle>

        <text
          className='flex content-center items-center fill-foreground text-xl font-semibold'
          x='50'
          y='50'
          textAnchor='middle'
          alignmentBaseline='middle'
        >
          {nextLevelPercentage}%
        </text>
      </svg>
    </div>
  );
};

const BarProgress = ({
  totalChallengePercentage,
  barLabel,
}: BarProgressionProps) => {
  return (
    <Card className='mx-auto p-0'>
      <p className='text-bold mb-8 flex items-center justify-between text-2xl font-bold text-tremor-content dark:text-dark-tremor-content'>
        {barLabel}
      </p>
      <ProgressBar
        value={totalChallengePercentage}
        className='color-red child:h-16!important mb-8 mt-3'
      />
    </Card>
  );
};

export { CircularProgress, BarProgress };
