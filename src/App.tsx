import React from 'react';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { MovieListPage } from './stories/MovieListPage';
import { SearchForm } from './components/search-form/SearchForm';
import MovieDetailsWrapper from './components/movie-details-wrapper/MovieDetailsWrapper';
import { AppHeader } from './components/header/AppHeader';
import { AddMovieForm } from './components/add-movie-form/AddMovieForm';
import { Modal } from './components/modal/Modal';
import './App.css';

const App: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // params
    const searchQuery = searchParams.get('search') || '';
    const sortCriterion = searchParams.get('sortBy') || 'title';
    const activeGenres = searchParams.get('filter') || '';

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

    const handleSearch = (value: string) => {
        if (value === searchQuery) {
            return;
        }

        setSearchParams({
            search: value,
            searchBy: 'title',
            sortBy: sortCriterion,
            filter: activeGenres,
        });
    };

    return (
        <div className="App">
            <div id="modal-root"></div>
            <div id="header-root"></div>
            <Routes>
                <Route path="/" element={<MovieListPage />}>
                    <Route
                        path="/"
                        element={
                            <AppHeader>
                                <SearchForm
                                    value={searchQuery}
                                    onChange={handleSearch}
                                ></SearchForm>
                            </AppHeader>
                        }
                    >
                        <Route
                            path="/new"
                            element={
                                <Modal
                                    title="add film"
                                    onClose={() => navigate('/')}
                                >
                                    <AddMovieForm
                                        genres={genres}
                                        onClose={() => navigate('/')}
                                    />
                                </Modal>
                            }
                        />
                        <Route
                            path="/:movieId/edit"
                            element={
                                <Modal
                                    title="edit film"
                                    onClose={() => navigate('/')}
                                >
                                    <AddMovieForm
                                        genres={genres}
                                        onClose={() => navigate('/')}
                                    />
                                </Modal>
                            }
                        />
                    </Route>
                    <Route path=":movieId" element={<MovieDetailsWrapper />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
