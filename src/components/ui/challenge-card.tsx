import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

import { ChallengeLevel, challengeLevels } from '@/config/mocks/challenge-card';

import { cn } from '@/lib/utils';

import { format } from '@formkit/tempo';

import { Typography } from './typography';

interface ChallengeEventCardProps {
  isAnEvent: boolean;
  eventStartDate: Date | string;
  eventEndDate: Date | string;
}

interface ChallengeEventCardRefProps {
  isAnEvent?: never;
  eventStartDate?: undefined;
  eventEndDate?: undefined;
}

interface ChallengeCardProps {
  title: string;
  techs: string[];
  challengeLevel: ChallengeLevel;
  description: string;
}

type ChallengeEventCard = ChallengeEventCardProps | ChallengeEventCardRefProps;

export const ChallengeCard = ({
  title,
  techs,
  description,
  challengeLevel,
  eventStartDate,
  eventEndDate,
  isAnEvent,
}: ChallengeCardProps & ChallengeEventCard) => {
  return (
    <div className='grid max-h-52 w-fit max-w-[900px] grid-cols-9 overflow-hidden rounded-2xl'>
      <div className='relative col-span-4 overflow-hidden'>
        <Badge
          className={cn(
            'pointer-events-none absolute left-4 top-4 z-10 select-none border-brand-400 bg-secondary uppercase text-brand-400',
            challengeLevel === 'beginner' &&
              'border-emerald-500 text-emerald-500',
            challengeLevel === 'intermediate' &&
              'border-amber-400 text-amber-400',
            challengeLevel === 'advanced' && 'border-red-400 text-red-400',
            challengeLevel === 'expert' && 'border-sky-400 text-sky-400'
          )}
        >
          {challengeLevels[challengeLevel]}
        </Badge>

        <Image
          className='aspect-auto size-full h-full object-cover'
          alt='Quack Visual!'
          src='/img/card-template.jpg'
          width={800}
          height={800}
          style={{
            maskImage: `linear-gradient(to top, transparent, black 90%, black)`,
          }}
        />

        {isAnEvent && (
          <Typography.Muted className='absolute bottom-6 left-1/2 z-10 w-fit -translate-x-1/2 text-nowrap text-xs'>
            {`${format(eventStartDate, 'short', 'br')} - ${format(eventEndDate, 'short', 'br')}`}
          </Typography.Muted>
        )}
      </div>

      <div className='col-span-5 flex flex-col bg-secondary p-4'>
        <Typography.H2 className='mb-2 text-brand-500'>{title}</Typography.H2>

        <div className='flex items-center gap-1'>
          {techs.map((tech, index) => (
            <Badge
              variant='outline'
              className='select-none border-brand-400 text-brand-400'
              key={`${tech}-${index}`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Typography.P className='mt-2 max-w-96 text-sm text-brand-50'>
          {description.substring(0, 170).concat('...')}
        </Typography.P>
      </div>
    </div>
  );
};
