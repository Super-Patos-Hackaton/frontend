import { ChallengeDeadline } from '@/types/challenges';

import { create } from 'zustand';

interface useCalendarStore {
  date: Date;
  challengesDeadline: ChallengeDeadline[];
  setDate: () => void;
  setChallengesDeadline: () => void;
}

const dateMock: ChallengeDeadline[] = [
  {
    id: '1',
    deadline: new Date(2024, 5, 27),
    title: 'Primeiro Maravilhoso Hackaton da Bichinhos da TI',
  },
  {
    id: '2',
    deadline: new Date(2024, 5, 29),
    title: 'Segundo Maravilhoso Hackaton da Bichinhos da TI',
  },
];

export const useCalendar = create<useCalendarStore>(() => ({
  date: new Date(),
  challengesDeadline: dateMock,
  setDate: () => {},
  setChallengesDeadline: () => {},
}));
