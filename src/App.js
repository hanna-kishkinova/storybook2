import './App.css';
import {Route, Routes, useSearchParams} from "react-router-dom";
import {MovieListPage} from "./stories/MovieListPage";
import {SearchForm} from "./stories/SearchForm";
import MovieDetailsWrapper from "./stories/MovieDetailsWrapper";
import {AppHeader} from "./stories/AppHeader";

function App() {
    const [searchParams, setSearchParams] = useSearchParams();

    // params
    const searchQuery = searchParams.get('search') || '';
    const sortCriterion = searchParams.get('sortBy') || 'title';
    const activeGenres = searchParams.get('filter') || '';

    const handleSearch = (value) => {
        if (value === searchQuery) {
            return;
        }

        setSearchParams({search: value, searchBy: 'title', sortBy: sortCriterion, filter: activeGenres});
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MovieListPage/>}>
                    <Route path="/" element={<AppHeader>
                        <SearchForm value={searchQuery} onChange={handleSearch}></SearchForm>
                    </AppHeader>}/>
                    <Route path=":movieId" element={<MovieDetailsWrapper/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
