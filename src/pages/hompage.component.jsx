import React, { useState } from 'react';
import Card from '../components/card.component';
import SearchBar from '../components/searchbar.component';

const HomePage = () => {
  const [search, setSearch] = useState('search query');
  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <SearchBar
        search={search}
        handleChange={(value) => setSearch(value)}
        handleSearch={(e) => handleSearch(e)}
      />
      <Card />
    </div>
  );
};

export default HomePage;
