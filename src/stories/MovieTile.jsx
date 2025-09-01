import PropTypes from "prop-types";
import "./movieTile.css";
import {ContextMenu} from "./ContextMenu";

export const MovieTile = ({moveOptions, onClick}) => {
    return (
        <div className="movie-tile" onClick={onClick}>
            <div className='movie-tile-options'>
                <ContextMenu submitText='Edit' canselText='Delete' submitOnClick={() => {}} canselOnClick={() => {}}/>
            </div>
            <img src={moveOptions.url} alt="movie-image" />
            <div className="movie-tile-content">
                <div className="movie-tile-name">
                    <h3>{moveOptions.name}</h3>
                    <div>
                        {
                            moveOptions.relevantGenres.map((genre) => {
                                return (
                                    <span>{genre}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="movie-tile-release-year">{moveOptions.releaseYear}</div>
            </div>
        </div>
    );
};

MovieTile.propTypes = {
    moveOptions: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};
