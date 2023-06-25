import React, { useState } from 'react';
import './style.css';
import MovieCard from '../MovieCard/MovieCard';
import movies from '../../movies';

interface Movie {
    title: string;
    year: number;
    director: string;
    poster: string;
    description: string;
}

interface MoviesListProps {
    searchValue: string;
}

const MoviesList: React.FC<MoviesListProps> = ({ searchValue }) => {
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

    React.useEffect(() => {
        if (searchValue.trim() !== '') {
            const filtered = movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchValue.toLowerCase()),
            );
            setFilteredMovies(filtered);
        } else {
            setFilteredMovies(movies);
        }
    }, [searchValue]);

    return (
        <div className="movies-list">
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;
