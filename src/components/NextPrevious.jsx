import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const NextPrevious = () => {
    const { personalData,step,setStep,StepOne,StepTwo,StepThree,setStepOne,setStepTwo,setStepThree } = useContext(PersonalDataContext)

    function handleNext(){
        if(step<4){
            setStep((step)=>step+1)
        }
        console.log('step=> '+step)
    }
    function handlePrevious(){
if(step!=1){
    setStep((step)=>step-1)
    console.log('step=> '+step)
}
console.log('step=> '+step)
    }
    return (
        <div className=' flex align-middle items-center justify-end'>
            <button onClick={handlePrevious} className=' bg-slate-950 inline text-right text-white px-4 py-2 mr-4 rounded-md'>Previous</button>

            <button onClick={handleNext} className='  bg-slate-950 inline text-right text-white px-4 py-2 rounded-md'>Next</button>
 
        </div>
    );
};

export default NextPrevious;