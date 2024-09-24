import { type DayContentProps } from 'react-day-picker';

import { useCalendar } from '@/hooks/use-calendar';

import { useStore } from 'zustand';

const CalendarCustomDay = ({ date }: DayContentProps) => {
  const calendar = useStore(useCalendar, (state) => state);

  const challengesOnDay = calendar.challengesDeadline.filter(
    (challenge) =>
      challenge.deadline.getFullYear() === date.getFullYear() &&
      challenge.deadline.getMonth() === date.getMonth() &&
      challenge.deadline.getDate() === date.getDate()
  );

  return (
    <span className='relative overflow-visible'>
      {date.getDate()}
      {challengesOnDay.length > 0 && (
        <div className='absolute -right-2 -top-1 h-[6px] w-[6px] rounded-full bg-blue-500'></div>
      )}
    </span>
  );
};

export default CalendarCustomDay;
