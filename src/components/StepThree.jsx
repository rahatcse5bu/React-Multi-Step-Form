import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const StepThree = () => {
    // var [stepThreeData,setStepThree]= useState({});
    const { setStepThree,StepThreeData } = useContext(PersonalDataContext)

    // function handleNext(){
    //     console.log(stepThreeData);
    //     alert(JSON.stringify(stepThreeData))
    // }
    return (
        <div className='step-one text-white px-2 pt-4 pb-2 mt-4 rounded-lg'>
            {/* First & Last Name  */}
<div className="grid grid-cols-2 gap-4">
  <div>
    <label htmlFor="firstName" className="block text-sm font-medium text-white">
      Height
    </label>
    <input value={StepThreeData.height}
      type="text" placeholder='5 feet 3 inch.' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        height: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="lastName" className="block text-sm font-medium text-white">
      Date of Birth
    </label>
    <input value={StepThreeData.dob}
      type="date" placeholder='09-01-1998' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        dob: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
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
    <label htmlFor="division" className="block text-sm font-medium text-white">
      Division
    </label>
    <input value={StepThreeData.division}
      type="text" placeholder='Barisal' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        division: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="district" className="block text-sm font-medium text-white">
      District
    </label>
    <input value={StepThreeData.district}
      type="text" placeholder='Barguna Sadar' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        district: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
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
    <label htmlFor="present_address" className="block text-sm font-medium text-white">
      Present Address
    </label>
    <textarea value={StepThreeData.present_address} onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        present_address: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"  
    >

    </textarea>
  </div>
  <div>
    <label htmlFor="permanent_address" className="block text-sm font-medium text-white">
      Permanent Address
    </label>
    <textarea value={StepThreeData.permanent_address} onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        permanent_address: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"  
    >
    </textarea>
  </div>
</div>
 {/* End of Dept & Batch  */}
 {/* Roll & Reg Number  */}
<div className="grid grid-cols-2 gap-4 pb-4">
  <div>
    <label htmlFor="monthly_income" className="block text-sm font-medium text-white">
      Monthly Income
    </label>
    <input value={StepThreeData.monthly_income} onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        monthly_income: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      type="text" placeholder='30,000 BDT'
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="expense" className="block text-sm font-medium text-white">
      Monthly Expenses
    </label>
    <input value={StepThreeData.monthly_expenses} onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        monthly_expenses: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      type="text" placeholder='27,345 BDT'
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
</div>
 {/* End of Roll & Reg  */}
        </div>
    );
};

export default StepThree;