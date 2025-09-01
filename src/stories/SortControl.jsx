import React from "react";
import PropTypes from "prop-types";

export const SortControl = ({ value, onChange }) => {
    const handleChange = (event) => {
        const newValue = event.target.value;
        onChange?.(newValue);
    };

    return (
        <div className="sort-control flex items-center gap-2">
            <label htmlFor="sort-select" className="font-medium">
                Sort by:
            </label>
            <select
                id="sort-select"
                value={value}
                onChange={handleChange}
                className="border rounded px-2 py-1"
            >
                <option value="releaseDate">Release Date</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
};

SortControl.propTypes = {
    value: PropTypes.oneOf(["releaseDate", "title"]).isRequired,
    onChange: PropTypes.func.isRequired,
};
