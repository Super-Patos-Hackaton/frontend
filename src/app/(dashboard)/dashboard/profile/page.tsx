import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Typography } from '@/components/ui/typography';

import { IconTechs } from '@/config/icon-techs';
import { user } from '@/config/mocks/user-profile-page';
import { UserBadges } from '@/config/user-badges';

import { format } from '@formkit/tempo';

import { PencilIcon, UserIcon } from 'lucide-react';

import { MostUsedTechsChart } from './_components/most-used-techs-chart';
import { ProfileCard } from './_components/profile-card';
import { UserScoreChart } from './_components/user-score-chart';

export const ProfilePage = () => {
  return (
    <div className='flex gap-8'>
      <ProfileCard containerClassName='sticky top-0 left-0 max-h-[calc(100vh-6rem)]  max-w-80'>
        <div className='flex h-full flex-col items-start'>
          <div className='relative mb-4'>
            <Avatar className='size-[15.5rem] overflow-hidden'>
              <AvatarImage src={user.avatar} width={248} height={248} />
              <AvatarFallback className='flex items-center bg-brand-300'>
                <UserIcon className='size-full rounded-full fill-brand-50 text-brand-50' />

                <div className='absolute -bottom-40 size-48 bg-brand-50' />
              </AvatarFallback>
            </Avatar>

            <Button
              size='icon'
              className='absolute bottom-4 right-4 z-10 rounded-full bg-brand-500 p-2'
            >
              <PencilIcon className='size-6' />
            </Button>
          </div>

          <>
            <strong className='text-2xl'>{user.name}</strong>
            <Typography.Muted className='text-base leading-4 text-brand-300'>
              Front-End
            </Typography.Muted>
          </>

          <div className='mt-4 flex items-center gap-2'>
            {user.badges.map((badge, index) => {
              const Badge = UserBadges[badge];
              return (
                <div key={`${badge}-${index}`}>
                  <Badge className='size-7 fill-brand-300' />
                </div>
              );
            })}
          </div>

          <Button className='mt-5 w-full uppercase tracking-normal'>
            Editar
          </Button>

          <div className='mt-5'>
            <strong className='block text-[18px]'>
              Primeiro <span className='text-brand-500'>Quack</span>
            </strong>

            <span className='text-brand-300'>
              {format(user.createdAt, 'long', 'pt')}
            </span>
          </div>

          <div className='mt-5 w-full'>
            <strong className='block text-[18px]'>Ranking</strong>

            <div className='mt-2 flex w-full flex-col gap-3.5'>
              <div className='flex flex-col items-start justify-start gap-1'>
                <span className='text-brand-300'>Hardskills</span>
                <Progress value={78} />
              </div>

              <div className='flex flex-col items-start justify-start gap-1'>
                <span className='text-brand-300'>Softskills</span>
                <Progress value={57} />
              </div>
            </div>
          </div>
        </div>
      </ProfileCard>

      <div className='flex w-full flex-col gap-8'>
        <ProfileCard title='Bio'>
          <Typography.P className='text-brand-50'>{user.bio}</Typography.P>
        </ProfileCard>

        <ProfileCard title='Informações'>
          <div className='flex w-full justify-between gap-8'>
            <UserScoreChart />

            <MostUsedTechsChart />
          </div>
          <Typography.H2 className='mt-6 text-brand-500'>
            Ferramentas
          </Typography.H2>

          <div className='flex items-center gap-4'>
            {user.techs.map((tech, index) => {
              const Icon = IconTechs[tech];
              return (
                <div key={`${tech}-${index}`}>
                  <Icon className='size-12' />
                </div>
              );
            })}
          </div>
        </ProfileCard>
      </div>
    </div>
  );
};
export default ProfilePage;
