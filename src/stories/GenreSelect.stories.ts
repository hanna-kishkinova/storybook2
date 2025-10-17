import { GenreSelect } from '../components/genre-select/GenreSelect';

export default {
    title: 'Components/GenreSelect',
    component: GenreSelect,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {
        genres: ['action', 'comedy', 'drama'],
        activeGenres: ['drama'],
    },
};
