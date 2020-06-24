import React, { useState } from 'react';
import Card from '../components/card.component';
import SearchBar from '../components/searchbar.component';

const HomePage = () => {
  const [search, setSearch] = useState('search query');
  return (
    <div>
      <SearchBar search={search} onChange={setSearch} />
      <Card />
    </div>
  );
};

export default HomePage;
