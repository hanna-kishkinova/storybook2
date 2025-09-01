import { SortControl } from "./SortControl";

export default {
    title: "Components/SortControl",
    component: SortControl,
    argTypes: {
        value: {
            control: { type: "select" },
            options: ["releaseDate", "title"],
        },
        onChange: { action: "changed" },
    },
};


export const Default = {
    args: {
        value: "releaseDate",
    },
}
