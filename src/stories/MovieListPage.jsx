import "./movieListPage.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {SearchForm} from "./SearchForm";
import {GenreSelect} from "./GenreSelect";
import {MovieTile} from "./MovieTile";
import {MovieDetails} from "./MovieDetails";
import {SortControl} from "./SortControl";
import {Outlet, useNavigate, useSearchParams} from "react-router-dom";

export const MovieListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const genres = [
        'drama', 'romance', 'animation', 'adventure', 'family', 'comedy', 'fantasy', 'science fiction', 'action'
    ];

    // params
    const searchQuery = searchParams.get('search') || '';
    const sortCriterion = searchParams.get('sortBy') || 'title';
    const activeGenres = searchParams.get('filter') || '';

    // locale state
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState(activeGenres ? activeGenres.split(',') : []);

    const handleGenreSelect = (genre) => {
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

    const handleMovieSelect = (movie) => {
        const currentSearchParams = searchParams.toString()

        navigate(`/${movie.id}?${currentSearchParams}`);
    };

    const handleSortChange = (sort) => {
        if (sort !== sortCriterion) {
            setSearchParams({
                search: searchQuery,
                searchBy: 'title',
                sortBy: sort,
                filter: activeGenres,
            });
        }
    };

    const handleMoviesFetch = (movieList) => setMovies(movieList);
    const handleDeleteMovie = async (id) => {
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
    }

    const handleEditMovie = async (id) => {
        console.log('id', id);
    }

    const fetchMovies = async () => {
        setLoading(true);

        const params = new URLSearchParams(searchParams || {});

        try {
            await fetch('http://localhost:4000/movies?' + params)
                .then((response) => response.json())
                .then(handleMoviesFetch);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [searchParams]);

    return (
        <div className="movie-list">
            <div id="header-root"></div>
            <Outlet/>
            <div className="container">
                <div className="movie-controls">
                    {genres && (
                        <GenreSelect genres={genres} onSelect={handleGenreSelect}
                                     activeGenres={selectedGenres}></GenreSelect>
                    )}
                    <SortControl selectedOption={sortCriterion} options={["release_date", "title"]}
                                 onChange={handleSortChange}/>
                </div>
                {movies && (
                    <div className="movie-list-content">
                        {
                            movies.data.map((movie) => (
                                    <MovieTile key={movie.id} data={movie} onClick={() => handleMovieSelect(movie)}
                                               onEditClick={() => handleEditMovie(movie.id)}
                                               onDeleteClick={() => handleDeleteMovie(movie.id)}/>
                                )
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

MovieListPage.propTypes = {
    movieListOption: PropTypes.object,
};
