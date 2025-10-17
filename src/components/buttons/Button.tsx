import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
    primary = false,
    backgroundColor = 'transparent',
    size = 'medium',
    label,
    onClick,
    ...props
}: {
    primary: boolean;
    backgroundColor?: string;
    size?: string;
    label: string;
    onClick?: () => any;
}) => {
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                mode,
            ].join(' ')}
            style={
                backgroundColor
                    ? ({ backgroundColor } as React.CSSProperties)
                    : undefined
            }
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /** Is this the principal call to action on the page? */
    primary: PropTypes.bool,
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** How large should the button be? */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Button contents */
    label: PropTypes.string.isRequired,
    /** Optional click handler */
    onClick: PropTypes.func,
};
