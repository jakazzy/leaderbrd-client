import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search }) => {
  return <div>{search}</div>;
};

SearchBar.propTypes = {
  search: PropTypes.string,
};

SearchBar.defaultProps = {
  search: 'search query',
};
export default SearchBar;
