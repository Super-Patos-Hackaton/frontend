import { Typography } from '../typography';

interface StatisticsProps {
  title: string;
  children: React.ReactNode;
}

const Statistics = ({ title, children }: StatisticsProps) => {
  return (
    <div className='h-[472px] max-w-[432px] rounded-lg border-2 border-brand-500 bg-secondary p-9'>
      <div className='border-b border-brand-400 pb-5'>
        <Typography.P className='pb-0 text-brand-300'>
          Estatísticas
        </Typography.P>
        <Typography.H3 className='pb-0'>{title}</Typography.H3>
      </div>
      <div className='pt-6'>{children}</div>
    </div>
  );
};

export default Statistics;
