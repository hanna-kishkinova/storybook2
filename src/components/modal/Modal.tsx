import React from 'react';
import './modal.css';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

export const Modal = (props: {
    onClose: any;
    title: string;
    children: any;
}) => {
    return (
        <Portal node={document && document.getElementById('modal-root')}>
            <div className="modal">
                <button className="close-btn" onClick={props.onClose}>
                    &times;
                </button>
                <h2 className="modal-title">{props.title}</h2>
                {props.children}
            </div>
        </Portal>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};
