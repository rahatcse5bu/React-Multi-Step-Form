/* eslint-disable react/prop-types */
import { createContext, useState,useEffect } from "react";

export const PersonalDataContext = createContext({
	personalData: {},
    StepOneData:{},
    StepTwoData:{},
    StepThreeData:{}
	// success: true,
});

const PersonalDataProvider = (props) => {

	// const [personalData, addPersonalData] = useState([
	// 	// {
	// 	// 	name: "biscuits",
    //     //     amount :234.23
	// 	// },
	// 	// {
	// 	// 	name: "tea",
    //     //     amount :2.123
	// 	// },
	// ]);
    const StepOneSavedData = JSON.parse(localStorage.getItem('stepOneData')) || {}
    const StepTwoSavedData = JSON.parse(localStorage.getItem('stepTwoData')) || {}
    const StepThreeSavedData = JSON.parse(localStorage.getItem('stepThreeData')) || {}
const [StepOneData,setStepOne] = useState(StepOneSavedData);
const [StepTwoData,setStepTwo] =useState(StepTwoSavedData);
const [StepThreeData,setStepThree] =useState(StepThreeSavedData);
console.log('jhh'+JSON.stringify(StepOneSavedData));
const [step, setStep] = useState(1);
  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('stepOneData', JSON.stringify(StepOneData));
  }, [StepOneData]);

  useEffect(() => {
    localStorage.setItem('stepTwoData', JSON.stringify(StepTwoData));
  }, [StepTwoData]);

  useEffect(() => {
    localStorage.setItem('stepThreeData', JSON.stringify(StepThreeData));
  }, [StepThreeData]);
	const value = {
        StepOneData,
        StepTwoData,
        StepThreeData,
        setStepOne: setStepOne,
        setStepTwo: setStepTwo,
        setStepThree: setStepThree,
		step,
		setStep,
	};

	return (
		<PersonalDataContext.Provider value={value}>
			{props.children}
		</PersonalDataContext.Provider>
	);
};

export default PersonalDataProvider;