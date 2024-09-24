import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ChallengeCard } from '@/components/ui/challenge-card';
import { Typography } from '@/components/ui/typography';

import { challenges } from '@/config/mocks/challenge-card';

import { cn } from '@/lib/utils';

import { ChallengeLevel } from '@/types/challenges';

import { Rocket, Sword, Tag } from 'lucide-react';

import { CardSubtitle } from './_components/card-subtitle';
import { ChallengeLevelBadge } from './_components/challenge-level-badge';

interface AcceptanceChallengePageProps {
  params: {
    id: string;
  };
}

const AcceptanceChallengePage = ({ params }: AcceptanceChallengePageProps) => {
  const data = challenges.find(
    (challenge) => challenge.id === Number(params.id)
  );

  return (
    <div className='flex flex-col gap-6 pb-8'>
      <div className='flex flex-col gap-3'>
        <span className='flex items-center gap-2 text-brand-500'>
          <Sword className='size-7' />

          <Typography.H2 className='text-2xl font-medium'>
            {data?.title}
          </Typography.H2>
        </span>

        <div className='flex h-full flex-col rounded-md bg-secondary px-6 py-4'>
          <div className='flex grid grid-cols-6 gap-8'>
            <div className='col-span-4 flex flex-col'>
              <CardSubtitle>Descrição</CardSubtitle>
              <div className='mt-5 flex h-[400px] flex-col overflow-y-scroll'>
                <div className='flex flex-col gap-4'>
                  <strong>Interface</strong>

                  <Typography.P>{data?.interfaceDescription}</Typography.P>
                </div>

                <div className='mt-6 flex flex-col gap-4'>
                  <strong>Desafio</strong>
                  <Typography.P>{data?.description}</Typography.P>
                </div>

                <div className='mt-4 flex flex-col items-center gap-1'>
                  <Link
                    href='https://randomcat.com/'
                    className='self-start underline'
                  >
                    https://randomcat.com/
                  </Link>

                  <Link
                    href='https://picsum.photos/'
                    className='self-start underline'
                  >
                    https://picsum.photos/
                  </Link>
                </div>
              </div>

              <div className='mt-auto w-full border-t border-brand-400' />

              <div className='mt-2 flex items-center'>
                <Tag className='size-3 text-brand-400' />

                {data?.techs.map((tech) => (
                  <Typography.P
                    key={tech}
                    className={cn(
                      'relative ml-2 cursor-default text-sm lowercase',
                      'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out',
                      'hover:after:origin-bottom-left hover:after:scale-x-100'
                    )}
                  >
                    {tech}
                  </Typography.P>
                ))}
              </div>
            </div>

            <div className='col-span-2 flex w-full flex-col items-center justify-between gap-3'>
              <div className='relative h-full'>
                <ChallengeLevelBadge
                  className='absolute left-4 top-4 text-sm'
                  challengeLevel={data?.challengeLevel as ChallengeLevel}
                />
                <Image
                  className='aspect-square h-full rounded-2xl object-cover'
                  alt='Quack Visual!'
                  src='/img/card-template.jpg'
                  priority
                  width={700}
                  height={700}
                  data-testid='acceptance-challenge-image'
                />
              </div>
              <Link
                className='w-full'
                href={`/dashboard/challenges/${params.id}`}
              >
                <Button
                  data-testid='accept-challenge-button'
                  className='h-12 w-full rounded-xl tracking-wide'
                >
                  ACEITAR DESAFIO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <span className='flex items-center gap-2 text-brand-500'>
          <Rocket className='size-7' />

          <Typography.H2 className='text-2xl font-medium'>
            Continue se Desafiando
          </Typography.H2>
        </span>

        <div className='grid w-full grid-cols-12 gap-4 rounded-md'>
          {challenges.map((challenge) => (
            <Link
              href={`/dashboard/challenges/acceptance/${challenge.id}`}
              className={cn(
                'col-span-6 flex w-full flex-col',
                challenge.challengeLevel !== data?.challengeLevel && 'hidden',
                challenge.id === data?.id && 'hidden'
              )}
              key={challenge.title + challenge.id}
              data-testid={`acceptance-challenge-${challenge.id}`}
            >
              <ChallengeCard
                title={challenge.title}
                techs={challenge.techs}
                challengeLevel={challenge.challengeLevel}
                description={challenge.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcceptanceChallengePage;
