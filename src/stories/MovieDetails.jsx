import PropTypes from "prop-types";
import "./movieDetails.css";

export const MovieDetails = ({moveOptions}) => {
    return (
        <div className="movie-details">
            <div className="movie-details-image">
                <img src={moveOptions.url} alt="movie-image" />
            </div>
            <div className="movie-details-content">
                <div className='movie-details-title'>
                    <h3>{moveOptions.name}</h3>
                    <div className="score">{moveOptions.score}</div>
                </div>
                <div className='movie-details-relevant'>
                    {
                        moveOptions.relevantGenres.map((genre) => {
                            return (
                                <span>{genre}</span>
                            )
                        })
                    }
                </div>
                <div className="movie-details-footer">
                    <div className="year">{moveOptions.releaseYear}</div>
                    <div className="duration">{moveOptions.duration}</div>
                </div>
                <div className="movie-details-description">{moveOptions.description}</div>
            </div>
        </div>
    );
};

MovieDetails.propTypes = {
    moveOptions: PropTypes.object.isRequired,
};
