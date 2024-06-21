interface GraphProps {
  nextLevel: number;
}

const CircularProgress = ({ nextLevel }: GraphProps) => {
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
          strokeDashoffset={`calc(251.2 - (251.2 * ${nextLevel}) / 100)`}
        ></circle>

        <text
          className='flex content-center items-center fill-foreground text-lg font-semibold'
          x='50'
          y='50'
          textAnchor='middle'
          alignmentBaseline='middle'
        >
          {nextLevel}%
        </text>
      </svg>
    </div>
  );
};

const BarProgress = () => {
  return;
};

export { CircularProgress, BarProgress };
