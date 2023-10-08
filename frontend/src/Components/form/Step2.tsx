import React, { useState, useEffect, ChangeEvent } from 'react';

interface Step2Props {
  data: {
    files: File[];
  };
  setData: Function;
  handleSetGeolocation: ( lat: number, long: number) => void;
}

const Step2: React.FC<Step2Props> = ({ data, setData, handleSetGeolocation }) => {
  const [geolocation, setGeolocation] = useState<string>('');
  const [fileError, setFileError] = useState<string>('');

  useEffect(() => {
    // Function to get geolocation
    const getGeolocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setGeolocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
            handleSetGeolocation(latitude, longitude);
          },
          (error) => {
            console.error('Geolocation error:', error);
            setGeolocation('Unable to retrieve geolocation');
          }
        );
      } else {
        setGeolocation('Geolocation is not supported in this browser');
      }
    };

    getGeolocation();
  }, []);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 3) {
      setFileError('Maximum of 3 files allowed');
    } else {
      setFileError('');
      if (files) {
        setData({ ...data, files: Array.from(files) });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Multi-File Upload</h2>
        <p className="text-gray-600 mb-2">{geolocation}</p>
        <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
          Upload Files (Max 3, PNG, PDF)
        </label>
        <div className="relative overflow-hidden w-full mt-1">
          <input
            type="file"
            accept=".png, .pdf"
            multiple
            onChange={handleFileUpload}
            id="file-upload"
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          />
          <label
            htmlFor="file-upload"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            Select Files
          </label>
        </div>
        {/* Display the number of files selected */}
        {fileError && <p className="text-red-500">{fileError}</p>}
        {data.files.length > 0 && (
          <p className="mt-2 text-gray-600">{`${data.files.length} file(s) selected`}</p>
        )}
      </div>

      {/* <div className="flex gap-5 mt-4">
        <button
          onClick={handleNext}
          disabled={data.files.length === 0 || !!fileError}
          className={`flex-grow px-4 py-2 bg-blue-500 text-white rounded ${
            data.files.length === 0 || !!fileError ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div> */}


    </div>
  );
};

export default Step2;
