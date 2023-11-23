import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const StepTwo = () => {
    // var [stepTwoData,setStepTwo]= useState({});
    const { setStepTwo,StepTwoData } = useContext(PersonalDataContext)

    // function handleNext(){
    //     console.log(stepTwoData);
    //     alert(JSON.stringify(stepTwoData))
    // }
    return (
        <div className='step-one text-white px-2 pt-4 pb-2 mt-4 rounded-lg'>
            {/* First & Last Name  */}
<div className="grid grid-cols-2 gap-4">
  <div>
    <label htmlFor="firstName" className="block text-sm font-medium text-white">
      Father`s Name
    </label>
    <input
      type="text" value={StepTwoData.father_name} placeholder='Md.' onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        father_name: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="lastName" className="block text-sm font-medium text-white">
      Mother`s Name
    </label>
    <input
      type="text" value={StepTwoData.mother_name} placeholder='Rahat' onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        mother_name: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
</div>
 {/* End of First Name  */}
 {/* Email & Phone Number  */}
<div className="grid grid-cols-2 gap-4 py-4">
  <div>
    <label htmlFor="cgpa" className="block text-sm font-medium text-white">
      CGPA
    </label>
    <input
      type="cgpa" value={StepTwoData.cgpa} placeholder='3.96' onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        cgpa: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="weight" className="block text-sm font-medium text-white">
      Weight
    </label>
    <input
      type="text" value={StepTwoData.weight} placeholder='58 KG' onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        weight: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border  border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
</div>
 {/* End of Email & Phone  */}
  {/* Department & Batch */}
<div className="grid grid-cols-2 gap-4 pb-4">
  <div>
    <label htmlFor="blood_group" className="block text-sm font-medium text-white">
      Blood Group
    </label>
    <select value={StepTwoData.blood_group} onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        blood_group: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"  
    >
<option className='' selected> A+</option>
<option className=''> A-</option>
<option className=''> B+</option>
<option className=''> B-</option>
<option className=''> AB+</option>
<option className=''> AB-</option>
<option className=''> O+</option>
<option className=''> O-</option>

    </select>
  </div>
  <div>
    <label htmlFor="gender" className="block text-sm font-medium text-white">
      Gender
    </label>
    <select value={StepTwoData.gender} onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        gender: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"  
    >
<option className='' selected> Male</option>
<option className=''> Female</option>
<option className=''> Not Prefer To Say</option>


    </select>
  </div>
</div>
 {/* End of Dept & Batch  */}
 {/* Roll & Reg Number  */}
<div className="grid grid-cols-2 gap-4 pb-4">
  <div>
    <label htmlFor="roll" className="block text-sm font-medium text-white">
      Semester
    </label>
    <input value={StepTwoData.semester} onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        semester: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      type="text" placeholder='8th'
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="session" className="block text-sm font-medium text-white">
      Session
    </label>
    <input value={StepTwoData.session} onChange={(e)=>{setStepTwo((prevObject) => ({
        ...prevObject,
        session: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      type="text" placeholder='110-026-18'
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
</div>
 {/* End of Roll & Reg  */}
        </div>
    );
};

export default StepTwo;