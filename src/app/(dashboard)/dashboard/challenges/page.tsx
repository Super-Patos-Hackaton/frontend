'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import FilterChallenge from '@/components/filter-challenge';
import { ChallengeCard } from '@/components/ui/challenge-card';
import { Typography } from '@/components/ui/typography';

import { challenges } from '@/config/mocks/challenge-card';

import { cn } from '@/lib/utils';

import { ChallengeTypes } from '@/types/challenges';

import { CalendarClock, Pin } from 'lucide-react';

const ChallengesPage = () => {
  const [challengeType, setChallengeType] = useState<ChallengeTypes>('perm');
  const searchParams = useSearchParams();

  const search = searchParams.get('search')?.toLowerCase();
  const stacks = searchParams.get('stacks');
  const sort = searchParams.get('sort');
  const difficulty = searchParams.get('difficulty');

  const challengesFilter = useMemo(() => {
    if (challenges) {
      const filter = challenges.filter((challenge) => {
        const title = challenge.title.toLowerCase();
        const techs = challenge.techs.map((tech) => tech.toLowerCase());
        const level = challenge.challengeLevel.toLowerCase();

        const matchDifficulty = difficulty ? level === difficulty : true;
        const matchStacks = stacks ? techs.includes(stacks) : true;
        const matchSearch = search ? title.search(search ?? '') >= 0 : true;

        return matchDifficulty && matchStacks && matchSearch;
      });

      if (sort === 'desc') {
        return filter.sort((a, b) => b.id - a.id);
      }

      return filter.sort((a, b) => a.id - b.id);
    }

    return challenges;
  }, [search, stacks, sort, difficulty]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3 self-center'>
        <Typography.H3
          className={cn(
            'flex cursor-pointer items-center gap-1 border-b-2 border-b-transparent pb-1 text-foreground transition-colors duration-200 ease-in-out',
            challengeType === 'perm' && 'border-b-brand-500'
          )}
          onClick={() => setChallengeType('perm')}
        >
          <Pin />
          {''}Fixos
        </Typography.H3>
        <Typography.H3
          className={cn(
            'flex cursor-pointer items-center gap-1 border-b-2 border-b-transparent pb-1 text-foreground transition-colors duration-200 ease-in-out',
            challengeType === 'event' && 'border-b-brand-500'
          )}
          onClick={() => setChallengeType('event')}
        >
          <CalendarClock />
          {''}Eventos
        </Typography.H3>
      </div>

      <div className='flex gap-4'>
        <div>
          <FilterChallenge />
        </div>
        <div>
          <div className='grid max-h-[calc(100vh-7rem)] grid-cols-1 gap-3 overflow-y-scroll xl:grid-cols-2'>
            {challengesFilter.length > 0 && challengeType === 'perm'
              ? challengesFilter
                  .filter((challenge) => !challenge.isAnEvent)
                  .map((challenge) => (
                    <Link
                      key={challenge.id}
                      href={`/dashboard/challenges/acceptance/${challenge.id}`}
                    >
                      <ChallengeCard
                        title={challenge.title}
                        techs={challenge.techs}
                        challengeLevel={challenge.challengeLevel}
                        description={challenge.description}
                      />
                    </Link>
                  ))
              : challengesFilter
                  .filter((challenge) => challenge.isAnEvent)
                  .map((challenge) => (
                    <Link
                      key={challenge.id}
                      href={`/dashboard/challenges/${challenge.id}`}
                    >
                      <ChallengeCard
                        title={challenge.title}
                        techs={challenge.techs}
                        challengeLevel={challenge.challengeLevel}
                        description={challenge.description}
                        isAnEvent
                        eventStartDate={challenge.eventStartDate}
                        eventEndDate={challenge.eventEndDate}
                      />
                    </Link>
                  ))}
            {challengesFilter.length <= 0 && (
              <Typography.Error>Nenhum desafio encontrado</Typography.Error>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
