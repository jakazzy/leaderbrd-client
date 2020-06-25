import React from 'react';
import Header from './components/header.component';
import HomePage from './pages/home-page.component';

function App() {
  return (
    <div className="antialiased" bg-gray-200 text-gray-900>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
