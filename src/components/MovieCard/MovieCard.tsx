import React, { useState } from 'react';
import './style.css';
import Modal from '../Modal/Modal';

interface Movie {
    title: string;
    year: number;
    director: string;
    poster: string;
    description: string;
}
interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddToFavorites = () => {
        console.log('Adding to favorites:', movie.title);
        handleCloseModal();
    };

    return (
        <div className="movie-card">
            <img className="poster" src={movie.poster} alt={movie.title} />
            <h2 className="title">{movie.title}</h2>
            <p className="year">Year: {movie.year}</p>
            <p className="director">Director: {movie.director}</p>
            <button className="favorite-icon" onClick={handleOpenModal}>
                &#9734;
            </button>
            <Modal
                title={movie.title}
                description={movie.description}
                isOpen={isModalOpen}
                onConfirm={handleAddToFavorites}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default MovieCard;
