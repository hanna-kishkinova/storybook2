import PropTypes from "prop-types";
import {Button} from "./Button";
import "./contextMenu.css";
import {useState} from "react";


export const ContextMenu = ({submitText, canselText, submitOnClick, canselOnClick}) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuClick = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <div className="contextMenu" onClick={menuClick}>...</div>
        <div className={isOpen ? 'context-menu-popup open' : 'context-menu-popup'} onClick={menuClick}>
            <Button backgroundColor="#fff" label={submitText ? submitText : 'submit'} onClick={submitOnClick}/>
            <Button backgroundColor="#fff" label={canselText ? canselText : 'cancel'} onClick={canselOnClick}/>
        </div>
        </>
    );
};

ContextMenu.propTypes = {
    submitText: PropTypes.string,
    canselText: PropTypes.string,
    submitOnClick: PropTypes.func.isRequired,
    canselOnClick: PropTypes.func.isRequired,
};
