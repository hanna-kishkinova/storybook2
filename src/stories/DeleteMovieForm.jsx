import "./deleteMovieForm.css";
import PropTypes from "prop-types";
import React from "react";

export const DeleteMovieForm = ({onSubmit}) => {
    return (
        <div className="delete-movie-form">
            <p>Are you sure you want to delete this movie?</p>
            <div className="controls">
                <button onClick={onSubmit} className="btn primary">Submit</button>
            </div>
        </div>
    );
};

DeleteMovieForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
