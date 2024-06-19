import React, { ReactNode } from 'react';

import UserScore from '../user-score';

const Widget = () => {
  return (
    <div className='w-[576px] rounded-xl bg-secondary'>
      <div className='grid grid-cols-2'>
        <div className=''>test</div>
        <div className=''>
          <UserScore />
        </div>
      </div>
    </div>
  );
};

export default Widget;
