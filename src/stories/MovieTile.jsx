import PropTypes from "prop-types";
import "./movieTile.css";
import {ContextMenu} from "./ContextMenu";

export const MovieTile = ({data, onClick, onEditClick, onDeleteClick}) => {
    const getYear = (dateString) => {
        const date = new Date(dateString);

        return date.getFullYear();
    }

    const handleDeleteClick = () => {
        onDeleteClick()
    }

    const handleEditClick = () => {
        onEditClick()
    }

    return (
        <div className="movie-tile" onClick={onClick}>
            <div className='movie-tile-options'>
                <ContextMenu submitText='Edit' canselText='Delete' submitOnClick={handleEditClick} canselOnClick={handleDeleteClick}/>
            </div>
            <img src={data.poster_path} alt="movie-image"
                 onError={(e) => {
                     e.currentTarget.src = 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg"';
                 }}
            />
            <div className="movie-tile-content">
                <div className="movie-tile-name">
                    <h3>{data.title}</h3>
                    <div>
                        {
                            data.genres.map((genre) => {
                                return (
                                    <span key={genre}>{genre}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="movie-tile-release-year">{getYear(data.release_date)}</div>
            </div>
        </div>
    );
};

MovieTile.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
};
