import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
      <MoviesList searchValue={searchValue} />
    </div>
  );
}

export default App;
