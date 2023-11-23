import React, { useContext } from 'react';
import { PersonalDataContext } from '../context/FormData';

const Preview = () => {
    const { StepOneData,StepTwoData,StepThreeData} = useContext(PersonalDataContext)
 console.log(JSON.stringify(StepOneData))
 console.log(JSON.stringify(StepTwoData))
 console.log(JSON.stringify(StepThreeData))
 return (
    <div className="container mx-auto mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Step One Data</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>First Name:</strong> {StepOneData.first_name}</p>
            <p><strong>Last Name:</strong> {StepOneData.last_name}</p>
            <p><strong>Email:</strong> {StepOneData.email}</p>
            <p><strong>Phone:</strong> {StepOneData.phone}</p>
          </div>
          <div>
            <p><strong>Roll:</strong> {StepOneData.roll}</p>
            <p><strong>Reg:</strong> {StepOneData.reg}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Step Two Data</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Father Name:</strong> {StepTwoData.father_name}</p>
            <p><strong>Mother Name:</strong> {StepTwoData.mother_name}</p>
            <p><strong>Weight:</strong> {StepTwoData.weight}</p>
            <p><strong>CGPA:</strong> {StepTwoData.cgpa}</p>
          </div>
          <div>
            <p><strong>Blood Group:</strong> {StepTwoData.blood_group}</p>
            <p><strong>Gender:</strong> {StepTwoData.gender}</p>
            <p><strong>Semester:</strong> {StepTwoData.semester}</p>
            <p><strong>Session:</strong> {StepTwoData.session}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Step Three Data</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>First Name:</strong> {StepThreeData.first_name}</p>
            <p><strong>Last Name:</strong> {StepThreeData.last_name}</p>
            <p><strong>Email:</strong> {StepThreeData.email}</p>
            <p><strong>Phone:</strong> {StepThreeData.phone}</p>
          </div>
          <div>
            <p><strong>Roll:</strong> {StepThreeData.roll}</p>
            <p><strong>Reg:</strong> {StepThreeData.reg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;