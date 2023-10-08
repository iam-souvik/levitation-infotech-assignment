import React from 'react';

interface Step3Props {
  data: {
    selectedOptions: string[];
  };
  setData: Function;
}



const Step3: React.FC<Step3Props> = ({ data, setData }) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = e.target.value;
    const selectedOptions = data.selectedOptions.includes(selectedOption)
      ? data.selectedOptions.filter((option) => option !== selectedOption)
      : [...data.selectedOptions, selectedOption];
    setData({ ...data, selectedOptions });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Step 3: Multi-Field Radio Selector</h2>
      <div className="flex flex-col">
        <label className="mb-2">Select Your Age:</label>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={data.selectedOptions.includes('option1')}
            onChange={handleRadioChange}
          /> Option 1
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={data.selectedOptions.includes('option2')}
            onChange={handleRadioChange}
          /> Option 2
        </label>
        <label>
          <input
            type="checkbox"
            value="option3"
            checked={data.selectedOptions.includes('option3')}
            onChange={handleRadioChange}
          /> Option 3
        </label>
      </div>
      {/* Display the selected options */}
      {data.selectedOptions.length > 0 && (
        <p className="mt-2">
          {`Selected Options: ${data.selectedOptions.join(', ')}`}
        </p>
      )}
    </div>
  );
};

export default Step3;
