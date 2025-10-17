import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../components/buttons/Button';
import './contextMenu.css';
import { useState } from 'react';

export const ContextMenu = ({
    submitText,
    canselText,
    submitOnClick,
    canselOnClick,
}: {
    submitText: string;
    canselText: string;
    submitOnClick: any;
    canselOnClick: any;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuClick = (e: any) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleSubmit = () => {
        submitOnClick();
        setIsOpen(false);
    };

    const handleCansel = () => {
        canselOnClick();
        setIsOpen(false);
    };

    return (
        <div>
            <div className="contextMenu" onClick={menuClick}>
                ...
            </div>
            <div
                className={
                    isOpen ? 'context-menu-popup open' : 'context-menu-popup'
                }
                onClick={menuClick}
            >
                <Button
                    primary={true}
                    label={submitText ? submitText : 'submit'}
                    onClick={handleSubmit}
                />
                <Button
                    primary={false}
                    label={canselText ? canselText : 'cancel'}
                    onClick={handleCansel}
                />
            </div>
        </div>
    );
};

ContextMenu.propTypes = {
    submitText: PropTypes.string,
    canselText: PropTypes.string,
    submitOnClick: PropTypes.func.isRequired,
    canselOnClick: PropTypes.func.isRequired,
};
