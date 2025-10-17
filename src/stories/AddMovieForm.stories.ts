import { AddMovieForm } from '../components/add-movie-form/AddMovieForm';

export default {
    title: 'Components/AddMovieForm',
    component: AddMovieForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {
        genres: [
            { name: 'Documentary', id: '1' },
            { name: 'Comedy', id: '2' },
            { name: 'Horror', id: '3' },
            { name: 'Crime', id: '4' },
            { name: 'Action', id: '5' },
            { name: 'Adventure', id: '6' },
            { name: 'Fantasy', id: '7' },
        ],
    },
};
