import { SortControl } from '../components/sort-control/SortControl';

export default {
    title: 'Components/SortControl',
    component: SortControl,
    argTypes: {
        value: {
            control: { type: 'select' },
            options: ['release_date', 'title'],
        },
        onChange: { action: 'changed' },
    },
};

export const Default = {
    args: {
        options: ['release_date'],
        selectedOption: 'release_date',
    },
};
