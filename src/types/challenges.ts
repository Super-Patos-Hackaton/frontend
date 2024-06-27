export interface ChallengeDeadline {
  id: string;
  title: string;
  deadline: Date;
}

export type ChallengeLevel =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

export type ChallengeTypes = 'perm' | 'event';
