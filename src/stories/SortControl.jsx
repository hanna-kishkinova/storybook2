import React from "react";
import PropTypes from "prop-types";
import "./sortControl.css";

export const SortControl = ({ options, onChange }) => {
    const handleChange = (event) => {
        const newValue = event.target.value;

        onChange?.(newValue);
    };

    return (
        <div className="sort-control">
            <label htmlFor="sort-select" className="font-medium">
                Sort by:
            </label>
            <select
                id="sort-select"
                onChange={handleChange}
                className="border rounded px-2 py-1"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

SortControl.propTypes = {
    options: PropTypes.oneOf(["releaseDate", "title"]).isRequired,
    onChange: PropTypes.func.isRequired,
};
