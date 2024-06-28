'use client';

import * as React from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';

import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { useCalendar } from '@/hooks/use-calendar';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from 'zustand';

import CalendarCustomDay from './calendar-custom-day';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const calendar = useStore(useCalendar, (state) => state);

  const modifiers: DayPickerProps['modifiers'] = {};

  if (calendar.date) {
    modifiers.selected = calendar?.date;
  }

  return (
    <DayPicker
      locale={ptBR}
      formatters={{
        formatWeekdayName: (d) => format(new Date(d), 'eeeee'),
      }}
      modifiers={modifiers}
      onMonthChange={calendar.setDate}
      onDayClick={(day) => {
        calendar.setDate(day);
      }}
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      classNames={{
        months: 'space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption:
          'flex justify-center pt-1 relative items-center text-brand-500',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: '',
        head_cell:
          'uppercase text-brand-300 rounded-md w-9 font-normal text-[0.8rem]',
        row: 'w-full mt-2 text-brand-500',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 cursor-pointer'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-brand-500 text-secondary hover:bg-brand-500/90 hover:text-secondary-foreground focus:bg-brand-500 focus:text-secondary-foreground',
        day_today:
          ' text-brand-50 hover:bg-brand-500/90 hover:text-secondary-foreground focus:bg-brand-500 focus:text-secondary-foreground',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className='h-4 w-4' />,
        IconRight: () => <ChevronRight className='h-4 w-4' />,
        DayContent: CalendarCustomDay,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendário';

export { Calendar };
