import React from 'react';
import { IFormUser } from '../../Redux/constents';

interface Step1Props {
  data: IFormUser;
  setData: Function;
}

const Step1: React.FC<Step1Props> = ({ data, setData }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mt-5 mb-3 w-60">Step 1: Basic Details</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          max={10}
          name="phonenum"
          placeholder="Phone"
          value={data.phonenum}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="address1"
          placeholder="Address Line 1"
          value={data.address1}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="address2"
          placeholder="Address Line 2"
          value={data.address2}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={data.city}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="state"
          placeholder="State"
          value={data.state}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={data.pincode}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={data.country}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Step1;
