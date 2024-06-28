'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import { capitalize, cn } from '@/lib/utils';

import { useCalendar } from '@/hooks/use-calendar';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useStore } from 'zustand';

import { Calendar } from './ui/calendar';
import { Typography } from './ui/typography';

interface ChallengesCalendarProps {
  className?: string;
}

const ChallengesCalendar = ({ className }: ChallengesCalendarProps) => {
  const calendar = useStore(useCalendar, (state) => state);

  const formatDate = format(calendar.date, 'eee,d,LLL', {
    locale: ptBR,
  }).split(',');

  const limitTitle = (title: string) => {
    if (title.length > 35) {
      return title.substring(0, 35).concat('...');
    } else {
      return title;
    }
  };

  const challengesData = useMemo(() => {
    return calendar.challengesDeadline
      ?.filter(
        (challenge) =>
          challenge.deadline.getFullYear() === calendar.date.getFullYear() &&
          challenge.deadline.getMonth() === calendar.date.getMonth() &&
          challenge.deadline.getDate() === calendar.date.getDate()
      )
      .map((challenge) => (
        <li className='text-xs text-brand-500' key={challenge.title}>
          <Link
            href={`/challenge/${challenge.id}`}
            data-testid={`challenge-link-${challenge.id}`}
          >
            {limitTitle(challenge.title)}
          </Link>
        </li>
      ));
  }, [calendar.challengesDeadline, calendar.date]);

  return (
    <div className={cn('h-full w-80', className)}>
      <div className='flex h-[313px] flex-col justify-between rounded-t-lg bg-brand-500 px-6 py-3'>
        <Typography.P className='text-xs uppercase text-secondary'>
          Entrega de desafios
        </Typography.P>
        <div className='h-full overflow-y-auto overflow-x-hidden rounded-lg bg-secondary py-3 pl-6 pr-2'>
          <ul className='flex list-disc flex-col gap-2'>
            {challengesData.length === 0 ? (
              <span className='text-xs text-brand-500'>
                Não há desafios a vencer nesta data
              </span>
            ) : (
              challengesData
            )}
          </ul>
        </div>
        <Typography.H2 className='mt-2 pb-0 font-normal text-secondary'>
          {`${capitalize(formatDate[0])}, ${formatDate[1]} ${capitalize(formatDate[2])}`}
        </Typography.H2>
      </div>
      <div className='flex h-80 flex-col gap-4 rounded-b-lg bg-secondary px-3 pb-4 pt-5'>
        <Calendar />
      </div>
    </div>
  );
};

export default ChallengesCalendar;
