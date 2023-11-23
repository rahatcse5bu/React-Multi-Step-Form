/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PersonalDataContext = createContext({
	personalData: [],
	// success: true,
});

const PersonalDataProvider = (props) => {

	const [personalData, addPersonalData] = useState([
		// {
		// 	name: "biscuits",
        //     amount :234.23
		// },
		// {
		// 	name: "tea",
        //     amount :2.123
		// },
	]);
const [StepOneData,setStepOne] =useState({});
const [StepTwoData,setStepTwo] =useState({});
const [StepThreeData,setStepThree] =useState({});

	const [step, setStep] = useState(1);

	const value = {
		personalData,
		addPersonalData: addPersonalData,
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