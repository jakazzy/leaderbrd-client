import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, handleChange, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="w-full mb-8">
      <div className="flex items-center  border-b-2 border-red-700 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter a search query..."
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-red-900 border-red-900 hover:border-orange-400 text-sm border text-white hover:text-orange-400 py-2 px-8 rounded"
        >
          Search
        </button>
      </div>
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
