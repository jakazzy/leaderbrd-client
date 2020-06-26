/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ forName, label, ...otherProps }) => {
  return (
    <div className="mb-4 mt-6">
      <label
        htmlFor={forName}
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {' '}
        {label}
        <input
          className="block w-full h-10 text-sm  rounded  mt-4 py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          {...otherProps}
        />
      </label>
    </div>
  );
};

FormInput.propTypes = {
  forName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.object.isRequired,
};

export default FormInput;
