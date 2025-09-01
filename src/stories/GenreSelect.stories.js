import { GenreSelect } from "./GenreSelect";
import { fn } from 'storybook/test';

export default {
    title: "Components/GenreSelect",
    component: GenreSelect,
    tags: ["autodocs"],
    argTypes: {
        onSelect: { control: "func" },
    },
    args: {
        onSelect: fn(),
    }
};

export const Default = {
    args: {
        genres: ['action', 'comedy', 'drama'],
        selectedGenre: 'drama',
    },
};



