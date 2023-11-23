import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const NextPrevious = () => {
    const {step,setStep} = useContext(PersonalDataContext)

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
            <button onClick={handlePrevious} className=' bg-blue-900 inline text-right text-white px-4 py-2 mr-4 rounded-md'>Previous</button>

            <button onClick={handleNext} className='  bg-blue-900 inline text-right text-white px-4 py-2 rounded-md'>{step==4? 'Submit':'Next'}</button>
 
        </div>
    );
};

export default NextPrevious;