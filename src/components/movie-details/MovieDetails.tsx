import React from 'react';
import PropTypes from 'prop-types';
import './movieDetails.css';

interface MovieDetailModel {
    title: string;
    poster_path: string;
    genres: string[];
    release_date: string;
    vote_average: string;
    runtime: string;
    overview: string;
}

export const MovieDetails = ({
    movieOptions,
    onClose,
}: {
    movieOptions: MovieDetailModel;
    onClose: any;
}) => {
    const getYear = (dateString: string) => {
        const date = new Date(dateString);

        return date.getFullYear();
    };

    return (
        <div className="movie-details">
            <div className="search-icon" onClick={onClose}>
                <img
                    src="../../stories/assets/search-icon.png"
                    alt={'back to search'}
                />
            </div>
            <div className="movie-details-image">
                <img
                    src={movieOptions.poster_path}
                    alt="movie-image"
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg"';
                    }}
                />
            </div>
            <div className="movie-details-content">
                <div className="movie-details-title">
                    <h3>{movieOptions.title}</h3>
                    <div className="score">{movieOptions.vote_average}</div>
                </div>
                <div className="movie-details-relevant">
                    {movieOptions.genres.map((genre) => {
                        return <span key={genre}>{genre}</span>;
                    })}
                </div>
                <div className="movie-details-footer">
                    <div className="year">
                        {getYear(movieOptions.release_date)}
                    </div>
                    <div className="duration">{movieOptions.runtime}min</div>
                </div>
                <div className="movie-details-description">
                    {movieOptions.overview}
                </div>
            </div>
        </div>
    );
};

MovieDetails.propTypes = {
    movieOptions: PropTypes.object.isRequired,
};
