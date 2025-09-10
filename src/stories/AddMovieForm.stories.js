import {AddMovieForm} from "./AddMovieForm";

export default {
    title: "Components/AddMovieForm",
    component: AddMovieForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        genres: [
            {name: 'Documentary', id: '1'},
            {name: 'Comedy', id: '2'},
            {name: 'Horror', id: '3'},
            {name: 'Crime', id: '4'},
            {name: 'Action', id: '5'},
            {name: 'Adventure', id: '6'},
            {name: 'Fantasy', id: '7'},
        ],
        onSubmit: val => console.log('submit', val),
        onClose: () => console.log('close'),
    },
};



