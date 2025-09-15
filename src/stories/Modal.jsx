import "./modal.css";
import FocusTrap from "focus-trap-react";
import PropTypes from "prop-types";
import {Portal} from 'react-portal';

export const Modal = (props) => {
    return (
        <Portal node={document && document.getElementById('modal-root')}>
            <FocusTrap>
                <div className="modal">
                    <button className="close-btn" onClick={props.onClose}>&times;</button>
                    <h2 className="modal-title">{props.title}</h2>
                    {props.children}
                </div>
            </FocusTrap>
        </Portal>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};
