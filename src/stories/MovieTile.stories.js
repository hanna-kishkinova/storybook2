import {MovieTile} from "./MovieTile";
import {fn} from "storybook/test";

export default {
    title: "Components/MovieTile",
    component: MovieTile,
    parameters: {
        layout: "centered",
    },
    args: { onClick: fn() },
};

export const Default = {
    args: {
        moveOptions: {
            name: 'Bohemian Rhapsody',
            relevantGenres: ['Drama, Biography, Music'],
            url: './assets/poster_2.png',
            releaseYear: '2003'
        },
    },
};




