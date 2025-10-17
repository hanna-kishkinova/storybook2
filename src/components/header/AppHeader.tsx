import React from 'react';
import './appHeader.css';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const AppHeader = (props: any) => {
    const [headerRoot, setHeaderRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const rootElement = document.getElementById('header-root');
        setHeaderRoot(rootElement);
    }, []);

    if (!headerRoot) {
        return null;
    }

    return (
        <Portal node={headerRoot}>
            <header className="app-header">
                <div className="header-wrapper">
                    <h1>FIND YOUR MOViE</h1>
                    <section className="search-box">
                        <div>{props.children}</div>
                    </section>
                </div>
            </header>
        </Portal>
    );
};

AppHeader.propTypes = {
    children: PropTypes.node.isRequired,
};
