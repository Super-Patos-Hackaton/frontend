import { type DayContentProps } from 'react-day-picker';

import { useCalendar } from '@/hooks/use-calendar';

import { useStore } from 'zustand';

const CalendarCustomDay = (props: DayContentProps) => {
  const calendar = useStore(useCalendar, (state) => state);

  const challengesOnDay = calendar.challengesDeadline.filter(
    (challenge) =>
      challenge.deadline.getFullYear() === props.date.getFullYear() &&
      challenge.deadline.getMonth() === props.date.getMonth() &&
      challenge.deadline.getDate() === props.date.getDate()
  );

  return (
    <span className='relative overflow-visible'>
      {props.date.getDate()}
      {challengesOnDay.length > 0 && (
        <div className='absolute -right-2 -top-1 h-1 w-1 rounded-full bg-blue-500'></div>
      )}
    </span>
  );
};

export default CalendarCustomDay;
