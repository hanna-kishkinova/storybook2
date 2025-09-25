import PropTypes from "prop-types";
import {Button} from "./Button";
import "./contextMenu.css";
import {useState} from "react";


export const ContextMenu = ({submitText, canselText, submitOnClick, canselOnClick}) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen)
    };

    const handleSubmit = () => {
        submitOnClick();
        setIsOpen(false);
    }

    const handleCansel = () => {
        canselOnClick();
        setIsOpen(false);
    }

    return (
        <div>
            <div className="contextMenu" onClick={menuClick}>...</div>
            <div className={isOpen ? 'context-menu-popup open' : 'context-menu-popup'} onClick={menuClick}>
                <Button primary={true} label={submitText ? submitText : 'submit'} onClick={handleSubmit}/>
                <Button label={canselText ? canselText : 'cancel'} onClick={handleCansel}/>
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
