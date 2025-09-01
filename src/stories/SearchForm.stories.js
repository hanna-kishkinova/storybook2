import { fn } from 'storybook/test';
import {SearchForm} from "./SearchForm";

export default {
    title: "Components/SearchForm",
    component: SearchForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        onSearch: fn()
    },
};

export const Default = {
    args: {
        initialQuery: 'movie_1',
        onSearch: (val) => {console.log(val)},
    },
};
