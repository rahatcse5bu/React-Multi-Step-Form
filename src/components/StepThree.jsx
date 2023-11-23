import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const StepThree = () => {
    // var [stepThreeData,setStepThree]= useState({});
    const { setStepThree } = useContext(PersonalDataContext)

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
      First Name 3
    </label>
    <input
      type="text" placeholder='Md.' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        first_name: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="lastName" className="block text-sm font-medium text-white">
      Last Name 3
    </label>
    <input
      type="text" placeholder='Rahat' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        last_name: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
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
    <label htmlFor="email" className="block text-sm font-medium text-white">
      Email 3
    </label>
    <input
      type="email" placeholder='rahat.cse5.bu@gmail.com' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        email: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="phone" className="block text-sm font-medium text-white">
      Phone Number
    </label>
    <input
      type="text" placeholder='+8801793278360' onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        phone: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
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
    <label htmlFor="dept" className="block text-sm font-medium text-white">
      Department
    </label>
    <select onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        dept: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"  
    >
<option className='' selected> CSE</option>
<option className=''> Bio Chemistry</option>
<option className=''> Chemistry</option>
<option className=''> Physics</option>
<option className=''> Geology</option>
<option className=''> History</option>
<option className=''> Statistics</option>

    </select>
  </div>
  <div>
    <label htmlFor="batch" className="block text-sm font-medium text-white">
      Batch
    </label>
    <select onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        batch: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"  
    >
<option className=''> 1st</option>
<option className=''> 2nd</option>
<option className=''> 3rd</option>
<option className=''> 4th</option>
<option className='' selected> 5th</option>
<option className=''> 6th</option>
<option className=''> 7th</option>
<option className=''> 8th</option>
<option className=''> 9th</option>
<option className=''> 10th</option>
<option className=''> 11th</option>
<option className=''> 12th</option>
<option className=''> 13th</option>

    </select>
  </div>
</div>
 {/* End of Dept & Batch  */}
 {/* Roll & Reg Number  */}
<div className="grid grid-cols-2 gap-4 pb-4">
  <div>
    <label htmlFor="roll" className="block text-sm font-medium text-white">
      Roll
    </label>
    <input onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        roll: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
      }))}}
      type="text" placeholder='18CSE026'
      className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
      // Add any other input properties or event handlers as needed
    />
  </div>
  <div>
    <label htmlFor="reg" className="block text-sm font-medium text-white">
      Registration Number
    </label>
    <input onChange={(e)=>{setStepThree((prevObject) => ({
        ...prevObject,
        reg: e.target.value, // Replace 'newKey' and 'newValue' with your desired key-value pair
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

export default StepThree;