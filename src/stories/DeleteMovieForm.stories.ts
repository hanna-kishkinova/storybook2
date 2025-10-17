import { DeleteMovieForm } from '../components/delete-movie-form/DeleteMovieForm';

export default {
    title: 'Components/DeleteMovieForm',
    component: DeleteMovieForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {
        onSubmit: (val: any) => console.log('delete', val),
    },
};
