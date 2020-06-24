import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, handleChange }) => {
  return (
    <input
      className=""
      value={search}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  search: 'search query',
};
export default SearchBar;
