import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./searchForm.css";
import {Button} from "./Button";

export const SearchForm = ({  value,  onChange }) => {
    const [query, setQuery] = useState( value);

    const handleChange = (event) => {
        setQuery(event.target.value)
    };
    const handleKeyDown = (value) => {
        if (value.key === 'Enter') {
            triggerSearch()
        }
    }
    const handleSearchClick = () => triggerSearch();
    const triggerSearch = () => {  onChange(query) }

    useEffect(() => setQuery( value), [ value]);

    return (
        <div className="search-container">
            <input placeholder='What do you want to watch?' type="text" value={query} className="search-input" onChange={handleChange}  onKeyDown={handleKeyDown} />
            <Button label="Search" primary={true} onClick={handleSearchClick} />
        </div>
    );
};

SearchForm.propTypes = {
     value: PropTypes.string.isRequired,
     onChange: PropTypes.func.isRequired,
};
