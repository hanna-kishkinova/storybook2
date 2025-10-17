import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieDetails } from '../movie-details/MovieDetails';

const MovieDetailsWrapper = () => {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleBack = () => navigate(-1);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `http://localhost:4000/movies/${movieId}`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="container">
            <MovieDetails
                movieOptions={movie}
                key={movieId}
                onClose={handleBack}
            />
        </div>
    );
};

export default MovieDetailsWrapper;
