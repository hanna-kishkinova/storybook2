import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./searchForm.css";
import {Button} from "./Button";
import {Outlet, useNavigate} from "react-router-dom";

export const SearchForm = ({value, onChange}) => {
    const [query, setQuery] = useState(value);

    const navigate = useNavigate();
    const handleChange = (event) => {
        setQuery(event.target.value)
    };
    const handleKeyDown = (value) => {
        if (value.key === 'Enter') {
            triggerSearch()
        }
    }
    const handleSearchClick = () => triggerSearch();
    const triggerSearch = () => {
        onChange(query)
    }
    const handleAddMovie = () => {
        navigate('/new');
    }

    useEffect(() => setQuery(value), [value]);

    return (
        <div className="search-container">
            <div className="add-movie">
                <Button label='+ add movie' primary={false} onClick={handleAddMovie}></Button>
            </div>
            <input name="search_input" placeholder='What do you want to watch?' type="text" value={query} className="search-input"
                   onChange={handleChange} onKeyDown={handleKeyDown}/>
            <Button label="Search" primary={true} onClick={handleSearchClick}/>
            <Outlet/>
        </div>
    );
};

SearchForm.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
