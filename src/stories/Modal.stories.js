import {Modal} from "./Modal";
import {AddMovieForm} from "./AddMovieForm";
import React from "react";
import {DeleteMovieForm} from "./DeleteMovieForm";

export default {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        title: 'ADD MOVIE',
        children: <AddMovieForm
            onClose={() => console.log('close')}
            onSubmit={(val) => console.log('submit', val)}
            genres={[
                {name: 'Documentary', id: '1'},
                {name: 'Comedy', id: '2'},
                {name: 'Horror', id: '3'},
                {name: 'Crime', id: '4'},
            ]
            }/>,
        onClose: () => console.log("Modal onClose"),
    },
};

export const EditMovie = {
    args: {
        title: 'Edit MOVIE',
        children: <AddMovieForm
            onClose={() => console.log('close')}
            formData={{
                title: 'The Dark Knight',
                url: 'https://pixabay.com/images/search/movie/',
                selectedGenre: 5,
                date: '2008-07-16',
                rating: '9.0',
                runtime: '152',
                overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.'
            }}
            onSubmit={(val) => console.log('submit', val)}
            genres={[
                {name: 'Documentary', id: '1'},
                {name: 'Comedy', id: '2'},
                {name: 'Horror', id: '3'},
                {name: 'Crime', id: '4'},
            ]
            }/>,
        onClose: () => console.log("Modal onClose"),
    },
};

export const DeleteMovie = {
    args: {
        title: 'Delete MOVIE',
        children: <DeleteMovieForm onSubmit={() => console.log('delete')}/>,
        onClose: () => console.log("Modal onClose"),
    },
};



