import { Badge } from '@/components/ui/badge';

import { ChallengeLevel, challengeLevels } from '@/config/mocks/challenge-card';

import { cn } from '@/lib/utils';

interface ChallengeLevelBadgeProps {
  challengeLevel: ChallengeLevel;
  className?: string;
}

export const ChallengeLevelBadge = ({
  challengeLevel,
  className,
}: ChallengeLevelBadgeProps) => {
  return (
    <Badge
      className={cn(
        'pointer-events-none absolute left-4 top-4 z-10 select-none border-brand-400 bg-secondary uppercase text-brand-400',
        challengeLevel === 'beginner' && 'border-emerald-500 text-emerald-500',
        challengeLevel === 'intermediate' && 'border-amber-400 text-amber-400',
        challengeLevel === 'advanced' && 'border-red-400 text-red-400',
        challengeLevel === 'expert' && 'border-sky-400 text-sky-400',
        className
      )}
    >
      {challengeLevels[challengeLevel]}
    </Badge>
  );
};
