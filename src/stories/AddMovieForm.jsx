import "./addMovieForm.css";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import {Button} from "./Button";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useParams, useSearchParams} from "react-router-dom";

export const AddMovieForm = ({genres, onClose}) => {
    const { movieId } = useParams();
    const [initialValues, setInitialValues] = useState({
        title: "",
        poster_path: "",
        genres: "",
        release_date: "",
        vote_average: "",
        runtime: "",
        overview: "",
    });
    const [loading, setLoading] = useState(!!movieId);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (movieId) {
            const fetchMovie = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/movies/${movieId}`);

                    if (!response.ok) {
                        throw new Error(`Error fetching movie data: ${response.status}`);
                    }

                    const movieData = await response.json();

                    setInitialValues({
                        title: movieData.title || "",
                        poster_path: movieData.poster_path || "",
                        genres: movieData.genres[0] || "",
                        release_date: movieData.release_date || "",
                        vote_average: movieData.vote_average || "",
                        runtime: movieData.runtime || "",
                        overview: movieData.overview || "",
                    });
                } catch (err) {
                    console.error("API Error:", err);
                    setError("Failed to fetch movie data.");
                } finally {
                    setLoading(false);
                }
            };

            fetchMovie();
        }
    }, [movieId]);

    const handleSubmit = async (movie) => {
        try {
            const response = await fetch('http://localhost:4000/movies', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...movie, genres: [movie.genres]}),
            });

            if (response.ok) {
                console.log("Movie added successfully:", await response.json());
                onClose();
            } else {
                console.error("Error adding the movie:", await response.json());
            }
        } catch (error) {
            console.error("Error adding the movie:", error);
        }
    }

    if (loading) {
        return <div>Loading movie data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="add-movie-form">
            <Formik
                initialValues={initialValues}
                validate={(values) => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form>
                    <div className="add-movie-form__data">
                        <div className="add-movie-form__left">
                            <label htmlFor="title">Title</label>
                            <Field type="text" id="title" name="title" placeholder="Movie title"/>
                            <ErrorMessage name="title" component="div" className="error-message"/>

                            <label htmlFor="poster_path">movie url</label>
                            <Field type="text" id="poster_path" name="poster_path" placeholder="https://"/>
                            <ErrorMessage name="poster_path" component="div" className="error-message"/>

                            <label htmlFor="genres">genre</label>
                            <Field as="select" id="genres" name="genres">
                                <option value="" disabled selected>Select a Genre</option>
                                {genres.map((genre) => (<option key={genre} value={genre}>{genre}</option>))}
                            </Field>
                            <ErrorMessage name="selectedGenre" component="div" className="error-message"/>
                        </div>
                        <div className="add-movie-form__right">
                            <label htmlFor="release_date">RELEASE DATE</label>
                            <Field id="release_date" name="release_date" type="date" placeholder="Select Date"/>
                            <ErrorMessage name="release_date" component="div" className="error-message"/>

                            <label htmlFor="vote_average">Rating</label>
                            <Field id="vote_average" name="vote_average" type="number" placeholder="7.8"
                                   step="0.1" min="0" max="10"/>
                            <ErrorMessage name="vote_average" component="div" className="error-message"/>

                            <label htmlFor="runtime">runtime</label>
                            <Field id="runtime" name="runtime" type="number" placeholder="minutes" min="0"/>
                            <ErrorMessage name="runtime" component="div" className="error-message"/>
                        </div>
                    </div>
                    <div className="add-movie-form__textarea">
                        <label htmlFor="overview">overview</label>
                        <Field as="textarea" id="overview" name="overview" placeholder="Movie description"/>
                    </div>
                    <div className="controls">
                        <Button type="button" primary={false} onClick={onClose} label="Reset"></Button>
                        <Button type="submit" primary={true} label="Submit"></Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

AddMovieForm.propTypes = {
    genres: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
};
