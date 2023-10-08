import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import axios from 'axios';
import { RootState } from '../../Redux/store';
import { postFormUser } from '../../Redux/users/users.actions';

const MultiStepForm: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading: redux_loading } = useSelector((store: RootState) => store.formUsersManager);

  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenum: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    country: "",
    files: [] as File[],
    geolocation: '',
    selectedOptions: [] as string[],
  });

  const handleSetGeolocation = (lat: number, long: number): void => {
    setFormData(prevFormData => {
      return { ...prevFormData, geolocation: `${long}, ${lat}` }
    }
    )
  }


  const handleNext = () => {
    // Implement form navigation logic and validation
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phonenum || !formData.address1 || !formData.address2 || !formData.country || !formData.state || !formData.city || !formData.pincode) {
        alert('Please fill in all required fields.');
        return;
      }
    } else if (step === 2) {
      if (formData.files.length === 0) {
        alert('Please upload at least one file.');
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      phonenum: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      files: [] as File[],
      geolocation: '',
      selectedOptions: [] as string[],
    });
    setStep(1);
  };

  const handleSubmit = async () => {
    let finalFormData = formData;
    setLoading(true);
    try {
      const promises = finalFormData.files.map(async (file) => {
        return await uploadImagesInCloudinary(file);
      })
      const urls = await Promise.all(promises);
      finalFormData.files = urls;

      dispatch(postFormUser(finalFormData))
    } catch (error) {
      alert("Files upload fail, \nPlease try again!");
    } finally {
      handleCancel();
      setLoading(false);
    }
  };



  async function uploadImagesInCloudinary(file: File) {
    if (!file) return '';
    try {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'qljtwtyg');
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dwxjlreqs/image/upload',
        data
      );
      return res.data.secure_url;
    } catch (error) {
      console.log(error);
      return "";
    }
  };





  return (
    <div className="p-4">
      {/* Progress Indicator */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={`circle ${index < step ? 'active' : ''}`}
          ></div>
        ))}
      </div>

      <div className="h-5 bg-blue-100 rounded-lg">
        <div
          className="indicator h-5 bg-pink-500 rounded-lg"
          style={{ width: `${(100 / 3) * step}%` }}
        ></div>
      </div>
      <h2 className="text-2xl text-center mb-3  mt-4">Step {step} of 3</h2>
      {/* Step content */}
      {step === 1 && <Step1 data={formData} setData={setFormData} />}
      {step === 2 && <Step2 data={formData} setData={setFormData} handleSetGeolocation={handleSetGeolocation} />}
      {step === 3 && <Step3 data={formData} setData={setFormData} />}

      {/* Navigation buttons */}

      <div className="flex gap-5 w-52">

        <button
          onClick={handlePrevious}
          disabled={step === 1}
          className="flex-grow px-4 py-2 bg-gray-300 text-gray-600 rounded"
        >
          Previous
        </button>
        {step !== 3 && <button
          onClick={handleNext}
          className="flex-grow px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>}




        {step === 3 && (
          <div className="flex gap-5">
            <button
              onClick={handleCancel}
              className="flex-grow px-4 py-2 bg-red-600 text-black-600 rounded"
            >
              Cancel
            </button>
            <button
              disabled={loading || redux_loading}
              onClick={handleSubmit}
              className="flex-grow px-4 py-2 bg-green-500 text-white rounded disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        )}



      </div>



    </div>
  );
};

export default MultiStepForm;
