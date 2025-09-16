import "./movieListPage.css";
import {Header} from "./Header";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {SearchForm} from "./SearchForm";
import {GenreSelect} from "./GenreSelect";
import {MovieTile} from "./MovieTile";
import {MovieDetails} from "./MovieDetails";
import {SortControl} from "./SortControl";

export const MovieListPage = () => {

    // search state
    const [searchQuery, setSearchQuery] = useState();
    const handleSearch = (search) => setSearchQuery({...searchQuery, search, searchBy: 'title'});

    // genre state
    const [genres, setGenres] = useState();
    const [activeGenres, setActiveGenres] = useState([]);
    const handleGenreSelect = (genre) => {
        const genres = activeGenres.includes(genre) ? activeGenres.filter(g => g !== genre) : [...activeGenres, genre];
        setActiveGenres(genres)

        if (!genres?.length) {
            delete searchQuery.filter;
            setSearchQuery({...searchQuery});
        } else {
            setSearchQuery({...searchQuery, filter: genres.join(',')});
        }
    };

    // movie list
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(false);

    //selected movie (default to undefined or null)
    const [selectedMovie, setSelectedMovie] = useState();
    const handleMovieSelect = (movie) => setSelectedMovie(movie);

    // sort criterion
    const [sortCriterion, setSortCriterion] = useState('title');
    const handleSortChange = (criterion) => setSortCriterion(criterion);

    const handleMoviesFetch = (movieList) => {
        setMovies(movieList);

        if (!genres) {
            setGenres([...new Set(movieList.data.flatMap(data => data.genres))]);
        }
    };

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

        const params = new URLSearchParams(searchQuery || {});

        if (sortCriterion) {
            params.set('sortBy', sortCriterion);
        }

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
        const fetchData = async () => fetchMovies();
        fetchData();
    }, [searchQuery, activeGenres, sortCriterion]);

    return (
        <div className="movie-list">
            <div id="header-root"></div>
            {!selectedMovie && (
                <Header>
                    <SearchForm value="Fifty Shades Freed" onChange={handleSearch}/>
                </Header>
            )}
            {selectedMovie && (
                <div className="container">
                    <div className="selected-movie">
                        <MovieDetails moveOptions={selectedMovie} key={selectedMovie.id}
                                      onClose={() => handleMovieSelect(null)}/>
                    </div>
                </div>
            )}
            <div className="container">
                <div className="movie-controls">
                    {genres && (
                        <GenreSelect genres={genres} onSelect={(val) => handleGenreSelect(val)}
                                     activeGenres={activeGenres}></GenreSelect>
                    )}
                    <SortControl options={["release_date", "title"]} onChange={handleSortChange}/>
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
