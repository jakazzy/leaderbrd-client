import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, handleChange, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        className=""
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  search: 'search query',
};
export default SearchBar;
