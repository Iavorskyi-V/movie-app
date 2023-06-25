import React, { useState } from 'react';
import './style.css';

interface SearchProps {
    onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-box">
            <input
                className="search-input"
                type="search"
                placeholder="movie search"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className="button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Search;
