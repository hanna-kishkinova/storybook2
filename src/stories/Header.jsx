import './header.css';
import {SearchForm} from "./SearchForm";
import {Portal} from "react-portal";
import PropTypes from "prop-types";
import {Modal} from "./Modal";

export const Header = (props) => {
    return (
        <Portal node={document && document.getElementById('header-root')}>
            <header className="app-header">
                <div className="header-wrapper">
                    <h1>FIND YOUR MOViE</h1>
                    <section className="search-box">
                        <div>{props.children}</div>
                    </section>
                </div>
            </header>
        </Portal>
    )
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};
