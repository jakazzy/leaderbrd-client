import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ type, forName, idName, PlaceholderText, labelName }) => {
  return (
    <div className="mb-4 mt-6">
      <label
        htmlFor={forName}
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {' '}
        {labelName}
        <input
          className="block w-full h-10 text-sm  rounded  mt-4 py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          id={idName}
          placeholder={PlaceholderText}
        />
      </label>
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  forName: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
  PlaceholderText: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default FormInput;
