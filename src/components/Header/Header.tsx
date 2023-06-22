import React from 'react';
import './style.css';
import Search from '../Search/Search';

interface HeaderProps {
    onSearch: (value: string) => void;
    onClearSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onClearSearch }) => {
    const handleClearSearch = () => {
        onClearSearch();
    };
    return (
        <header className="header">
            <h1 className="header-title">Movie App</h1>
            <Search onSearch={onSearch} />
            <button className="button" onClick={handleClearSearch}>
                go Back
            </button>
        </header>
    );
};
export default Header;
