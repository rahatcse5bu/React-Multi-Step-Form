// import React from 'react';
import FormHeader from './FormHeader'
import StepOne from './StepOne';
const FormWrapper = () => {
    return (
        <div className="mx-auto bg-slate-600 w-[450px] px-4 py-8 mt-8 rounded-lg">
            <p className="text-center text-white">Allahu Akbar</p>
            <FormHeader/>
            <StepOne/>
        </div>
    );
};

export default FormWrapper;