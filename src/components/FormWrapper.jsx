// import React from 'react';
import { useContext } from 'react';
import FormHeader from './FormHeader'
import NextPrevious from './NextPrevious';
import { PersonalDataContext } from '../context/FormData';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Preview from './Preview';
import Progress from './Progress';
const FormWrapper = () => {
    const { personalData,step,setStep,StepOneData,StepTwoData,StepThreeData,setStepOne,setStepTwo,setStepThree } = useContext(PersonalDataContext)

    return (
        <div className="mx-auto bg-slate-900 w-[450px] px-4 py-8 mt-8 rounded-lg">
            <p className="text-center text-white">Allahu Akbar</p>
            <FormHeader/>
            <Progress/>
          {step==1? (<StepOne/>):step==2?(<StepTwo/>):step==3? (<StepThree/>):(<Preview/>)}  
            <NextPrevious/>
        </div>
    );
};

export default FormWrapper;