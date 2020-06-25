import React from 'react';

const FormInput = () => {
  return (
    <div>
      <label htmlFor="email">
        {' '}
        email
        <input
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
