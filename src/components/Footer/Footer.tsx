import React from 'react';
import classes from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <p className={classes.thanks}>Thanks for scrolling</p>
                <p>&#169; 2022 All rights reserved</p>
            </div>
        </footer>
    );
};