import React from 'react';
import './movieListPage.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { GenreSelect } from '../components/genre-select/GenreSelect';
import { MovieTile } from '../components/movie-tile/MovieTile';
import { SortControl } from '../components/sort-control/SortControl';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

interface MovieDetailModel {
    id: string;
    title: string;
    poster_path: string;
    genres: string[];
    release_date: string;
    vote_average: string;
    runtime: string;
    overview: string;
}

export const MovieListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const genres = [
        'drama',
        'romance',
        'animation',
        'adventure',
        'family',
        'comedy',
        'fantasy',
        'science fiction',
        'action',
    ];

    // params
    const searchQuery = searchParams.get('search') || '';
    const sortCriterion = searchParams.get('sortBy') || 'title';
    const activeGenres = searchParams.get('filter') || '';

    // locale state
    const [movies, setMovies] = useState<{ data: MovieDetailModel[] } | null>(
        null
    );
    const [selectedGenres, setSelectedGenres] = useState(
        activeGenres ? activeGenres.split(',') : []
    );

    const handleGenreSelect = (genre: string) => {
        const updatedGenres = selectedGenres.includes(genre)
            ? selectedGenres.filter((g) => g !== genre)
            : [...selectedGenres, genre];

        setSearchParams({
            search: searchQuery,
            searchBy: 'title',
            sortBy: sortCriterion,
            filter: updatedGenres.join(', '),
        });

        setSelectedGenres(updatedGenres);
    };

    const handleMovieSelect = (movie: any) => {
        const currentSearchParams = searchParams.toString();

        navigate(`/${movie.id}?${currentSearchParams}`);
    };

    const handleSortChange = (sort: string) => {
        if (sort !== sortCriterion) {
            setSearchParams({
                search: searchQuery,
                searchBy: 'title',
                sortBy: sort,
                filter: activeGenres,
            });
        }
    };

    const handleMoviesFetch = (movieList: any) => setMovies(movieList);
    const handleDeleteMovie = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:4000/movies/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.log('Error deleting the movie');
            }

            console.log('Movie deleted successfully:');
            fetchMovies();
        } catch (error) {
            console.error('Error deleting the movie:', error);
        }
    };

    const handleEditMovie = async (id: string) => {
        navigate(`/${id}/edit`);
    };

    const fetchMovies = async () => {
        const params = new URLSearchParams(searchParams || {});

        try {
            await fetch('http://localhost:4000/movies?' + params)
                .then((response) => response.json())
                .then(handleMoviesFetch);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [searchParams]);

    return (
        <div className="movie-list">
            <Outlet />
            <div className="container">
                <div className="movie-controls">
                    {genres && (
                        <GenreSelect
                            genres={genres}
                            onSelect={handleGenreSelect}
                            activeGenres={selectedGenres}
                        ></GenreSelect>
                    )}
                    <SortControl
                        selectedOption={sortCriterion}
                        options={['release_date', 'title']}
                        onChange={handleSortChange}
                    />
                </div>
                {movies && (
                    <div className="movie-list-content">
                        {movies.data.map((movie) => (
                            <MovieTile
                                key={movie.id}
                                data={movie}
                                onClick={() => handleMovieSelect(movie)}
                                onEditClick={() => handleEditMovie(movie.id)}
                                onDeleteClick={() =>
                                    handleDeleteMovie(movie.id)
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

MovieListPage.propTypes = {
    movieListOption: PropTypes.object,
};
