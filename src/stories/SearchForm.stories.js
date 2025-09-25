import { fn } from 'storybook/test';
import {SearchForm} from "./SearchForm";

export default {
    title: "Components/SearchForm",
    component: SearchForm,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    args: {
        onChange: fn()
    },
};

export const Default = {
    args: {
        value: 'movie_1',
        onChange: (val) => {console.log(val)},
    },
};
