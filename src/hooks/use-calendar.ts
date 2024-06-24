import { ChallengeDeadline } from '@/types/challenges';

import { create } from 'zustand';

interface useCalendarStore {
  date: Date;
  challengesDeadline: ChallengeDeadline[];
  setDate: (payload: Date | undefined) => void;
  setChallengesDeadline: (payload: ChallengeDeadline[]) => void;
}

export const useCalendar = create<useCalendarStore>((set) => ({
  date: new Date(),
  challengesDeadline: [],
  setDate: (payload) => set(() => ({ date: payload })),
  setChallengesDeadline: (payload) =>
    set(() => ({ challengesDeadline: payload })),
}));
