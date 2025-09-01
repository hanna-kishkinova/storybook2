import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./genreSelect.css";
import {Button} from "./Button";

export const GenreSelect = ({genres, selectedGenre, onSelect}) => {
    const [item, setGenre] = useState(selectedGenre);

    useEffect(() => setGenre(selectedGenre), [selectedGenre]);


    const handleClick = (genre) => {
        onSelect(genre);
        setGenre(genre);
    };

    return (
        <div className="genre-select-component">
            {genres.map((genre) => {
               return (
                   <Button primary={genre === item} label={genre} key={genre} onClick={() => handleClick(genre)} />
               )
            })}
        </div>
    )
};

GenreSelect.propTypes = {
    genres: PropTypes.array.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
};
