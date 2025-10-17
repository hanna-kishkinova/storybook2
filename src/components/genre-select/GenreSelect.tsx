import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './genreSelect.css';
import { Button } from '../buttons/Button';

export const GenreSelect = ({
    genres,
    activeGenres,
    onSelect,
}: {
    genres: string[];
    activeGenres: string[];
    onSelect: any;
}) => {
    const [items, setGenres] = useState(activeGenres);

    useEffect(() => setGenres(activeGenres), [activeGenres]);

    const handleClick = (genre: string) => {
        onSelect(genre);
        setGenres(genres);
    };

    return (
        <div className="genre-select-component">
            {genres.map((genre) => {
                return (
                    <Button
                        primary={items.includes(genre)}
                        label={genre}
                        key={genre}
                        onClick={() => handleClick(genre)}
                    />
                );
            })}
        </div>
    );
};

GenreSelect.propTypes = {
    genres: PropTypes.array.isRequired,
    activeGenres: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
};
