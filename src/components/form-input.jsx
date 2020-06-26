import React from 'react';

const FormInput = () => {
  return (
    <div className="">
      <label
        htmlFor="email"
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {' '}
        Email
        <input
          className="block w-11/12 h-10"
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
