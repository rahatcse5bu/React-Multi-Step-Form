import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const Preview = () => {
    const { personalData,step,setStep,StepOneData,StepTwoData,StepThreeData,setStepOne,setStepTwo,setStepThree } = useContext(PersonalDataContext)
 console.log(JSON.stringify(StepOneData))
 console.log(JSON.stringify(StepTwoData))
 console.log(JSON.stringify(StepThreeData))
    return (
        <div>
          <p> {JSON.stringify(StepOneData)}</p>
          <p> {JSON.stringify(StepTwoData)}</p>
          <p> {JSON.stringify(StepThreeData)}</p>
        </div>
    );
};

export default Preview;