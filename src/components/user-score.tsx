'use client';

import React, { useState } from 'react';

import { GraphElements } from '@/components/ui/graphElements';

const UserScore = () => {
  const [score, setScore] = useState<number>(75);
  return (
    <div>
      <GraphElements.CircularProgress>{score}</GraphElements.CircularProgress>
    </div>
  );
};

export default UserScore;
