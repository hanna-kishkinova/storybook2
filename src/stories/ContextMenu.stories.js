import {ContextMenu} from "./ContextMenu";
import {fn} from "storybook/test";

export default {
    title: "Components/ContextMenu",
    component: ContextMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    ars: {
        submitOnClick: fn(),
        canselOnClick: fn(),
    }
};

export const Default = {
    args: {
        submitText: 'edit',
        canselText: 'remove',
    },
};



