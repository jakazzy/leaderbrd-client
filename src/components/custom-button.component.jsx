import React from 'react';

const CustomButton = () => {
  return (
    <div className="flex w-full mt-8">
      <button
        className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default CustomButton;
