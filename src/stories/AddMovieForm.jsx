import "./addMovieForm.css";
import PropTypes from "prop-types";
import React from "react";

export const AddMovieForm = ({genres, onSubmit, onClose, formData}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newMovie = Object.fromEntries(formData.entries());

        if (newMovie.rating) newMovie.rating = parseFloat(newMovie.rating);
        if (newMovie.runtime) newMovie.runtime = parseInt(newMovie.runtime, 10);

        onSubmit(newMovie);
    };

    return (
        <div className="add-movie-form">
            <form onSubmit={handleSubmit}>
                <div className="add-movie-form__data">
                    <div className="add-movie-form__left">
                        <label htmlFor="title">Title</label>
                        <input defaultValue={formData?.title} id="title" name="title" type="text"
                               placeholder="Movie title"/>
                        <label htmlFor="url">movie url</label>
                        <input defaultValue={formData?.url} id="url" name="url" type="text" placeholder="https://"/>
                        <label htmlFor="selectedGenre">genre</label>
                        <select defaultValue={formData?.selectedGenre ? formData.selectedGenre : ''} id="selectedGenre"
                                name="selectedGenre">
                            <option value="" disabled hidden>
                                Select Genre
                            </option>
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="add-movie-form__right">
                        <label htmlFor="date">RELEASE DATE</label>
                        <input defaultValue={formData?.date} id="date" name="date" type="date"
                               placeholder="Select Date"/>
                        <label htmlFor="rating">Rating</label>
                        <input defaultValue={formData?.rating} id="rating" name="rating" type="number" placeholder="7.8"
                               step="0.1" min="0" max="10"
                        />
                        <label htmlFor="runtime">RUNTIME</label>
                        <input defaultValue={formData?.runtime} id="runtime" name="runtime" type="number"
                               placeholder="minutes" min="0"
                        />
                    </div>
                </div>
                <div className="add-movie-form__textarea">
                    <label htmlFor="overview" className="add-movie-form__label">OVERVIEW</label>
                    <textarea defaultValue={formData?.overview} id="overview" name="overview"
                              placeholder="Movie description"
                    ></textarea>
                </div>
                <div className="controls">
                    <button type="button" className="btn" onClick={onClose}>Reset</button>
                    <button type="submit" className="btn primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

AddMovieForm.propTypes = {
    genres: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    formData: PropTypes.object,
};
