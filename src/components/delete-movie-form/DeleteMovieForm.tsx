import React from 'react';
import './deleteMovieForm.css';
import PropTypes from 'prop-types';
import { Button } from '../buttons/Button';

export const DeleteMovieForm = ({ onSubmit }: { onSubmit: () => {} }) => {
    return (
        <div className="delete-movie-form">
            <p>Are you sure you want to delete this movie?</p>
            <div className="controls">
                <Button
                    onClick={onSubmit}
                    primary={true}
                    label="Submit"
                ></Button>
            </div>
        </div>
    );
};

DeleteMovieForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
