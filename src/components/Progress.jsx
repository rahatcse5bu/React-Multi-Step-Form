import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';


function Progress() {
    const { step } = useContext(PersonalDataContext)

  return (
    <div className="w-full bg-gray-200 p-1 rounded my-2">
      <div
        className="bg-blue-900 text-white leading-none py-1 text-center rounded"
        style={{ width: `${(((step-1)/3)*100).toFixed(2)}%` }}
      >
        {(((step-1)/3)*100).toFixed(0)}%
      </div>
    </div>
  );
}

export default Progress;
