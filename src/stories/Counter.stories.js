import { Counter } from "./Counter";

export default {
    title: "Components/Counter",
    component: Counter,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        initialValue: { control: "number" },
    },
};

export const Default = {
    args: {
        initialValue: 0,
    },
};
