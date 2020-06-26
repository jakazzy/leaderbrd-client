import React from 'react';

const FormInput = () => {
  return (
    <div className="mb-4 mt-6">
      <label
        htmlFor="email"
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {' '}
        Email
        <input
          className="block w-full h-10 text-sm  rounded  mt-4 py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          id="email"
          placeholder="email@gmail.com"
        />
      </label>
    </div>
  );
};

export default FormInput;
