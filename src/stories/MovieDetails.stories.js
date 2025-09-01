import {MovieDetails} from "./MovieDetails";

export default {
    title: "Components/MovieDetails",
    component: MovieDetails,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        moveOptions: {
            name: 'Pulp Fiction',
            relevantGenres: ['Action & Adventure'],
            url: './assets/poster_3.png',
            releaseYear: '1994',
            duration: '2h 35min',
            description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
            score: '8.9',
        },
    },
};



