import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./searchForm.css";
import {Button} from "./Button";

export const SearchForm = ({ initialQuery, onSearch }) => {
    const [query, setQuery] = useState(initialQuery);

    const handleChange = (event) => {
        setQuery(event.target.value)
    };
    const handleKeyDown = (value) => {
        if (value.key === 'Enter') {
            triggerSearch()
        }
    }
    const handleSearchClick = () => triggerSearch();
    const triggerSearch = () => { onSearch(query) }

    useEffect(() => setQuery(initialQuery), [initialQuery]);

    return (
        <div className="search-container">
            <input placeholder='What do you want to watch?' type="text" value={query} className="search-input" onChange={handleChange}  onKeyDown={handleKeyDown} />
            <Button label="Search" primary={true} onClick={handleSearchClick} />
        </div>
    );
};

SearchForm.propTypes = {
    initialQuery: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};
