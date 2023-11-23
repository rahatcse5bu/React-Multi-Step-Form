import  { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const FormHeader = () => {
    const { step,setStepOne,setStepTwo,setStepThree } = useContext(PersonalDataContext)
 const handleClearLocalStorage = ()=> {
    if(step==1){
        setStepOne(()=>{return {}})
    }
    else if(step==2){
        setStepTwo(()=>{return {}})
    }
    else if(step==3){
        setStepThree(()=>{return {}})
    }
    else{
        setStepOne(()=>{return {}})
        setStepTwo(()=>{return {}})
        setStepThree(()=>{return {}})

    }
 }
    return (
        <>
        <div className='header text-xl md:text-2xl lg:text-3xl text-center text-white'>
            MULTI STEP FORM 
        </div>
        <p onClick={handleClearLocalStorage} className='bg-blue-900 text-white absolute top-0 right-0 px-4 py-2 cursor-pointer'>Clear</p>
        </>
    );
};

export default FormHeader;