import PropTypes from "prop-types";
import "./movieDetails.css";
import search_icon from "./assets/search-icon.png";

export const MovieDetails = ({moveOptions, onClose}) => {
    const getYear = (dateString) => {
        const date = new Date(dateString);

        return date.getFullYear();
    }

    return (
        <div className="movie-details">
            <div className="search-icon" onClick={onClose}><img src={search_icon} alt={'back to search'}/></div>
            <div className="movie-details-image">
                <img src={moveOptions.poster_path} alt="movie-image" onError={(e) => {
                    e.currentTarget.src = 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg"';
                }}/>
            </div>
            <div className="movie-details-content">
                <div className='movie-details-title'>
                    <h3>{moveOptions.title}</h3>
                    <div className="score">{moveOptions.vote_average}</div>
                </div>
                <div className='movie-details-relevant'>
                    {
                        moveOptions.genres.map((genre) => {
                            return (
                                <span key={genre}>{genre}</span>
                            )
                        })
                    }
                </div>
                <div className="movie-details-footer">
                    <div className="year">{getYear(moveOptions.release_date)}</div>
                    <div className="duration">{moveOptions.runtime}min</div>
                </div>
                <div className="movie-details-description">{moveOptions.overview}</div>
            </div>
        </div>
    );
};

MovieDetails.propTypes = {
    moveOptions: PropTypes.object.isRequired,
};
