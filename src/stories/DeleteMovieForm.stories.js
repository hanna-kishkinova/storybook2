import {DeleteMovieForm} from "./DeleteMovieForm";

export default {
    title: "Components/DeleteMovieForm",
    component: DeleteMovieForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        onSubmit: val => console.log('delete', val),
    },
};



