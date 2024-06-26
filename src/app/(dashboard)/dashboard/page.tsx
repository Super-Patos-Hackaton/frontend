import ChallengesCalendar from '@/components/challenges-calendar';
import ChallengesCompletion from '@/components/challenges-completion';
import UserLevel from '@/components/user-level';

const Home = () => {
  return (
    <main className='mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-12'>
      <div className='flex h-[633px] justify-center gap-12'>
        <div className='w-2/3'>
          <ChallengesCompletion
            nextChallengeDate='21-07-2024'
            totalChallengePercentage={14}
            classname='w-full mb-12'
          />
          <UserLevel nextLevelPercentage={35} level={5} classname='w-full ' />
        </div>
        <ChallengesCalendar className='w-1/3' />
      </div>
    </main>
  );
};

export default Home;
