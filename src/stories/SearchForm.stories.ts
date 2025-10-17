import { fn } from 'storybook/test';
import { SearchForm } from '../components/search-form/SearchForm';

export default {
    title: 'Components/SearchForm',
    component: SearchForm,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn(),
    },
};

export const Default = {
    args: {
        value: 'movie_1',
    },
};
