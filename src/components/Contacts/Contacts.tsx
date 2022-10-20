import React from 'react';
import classes from './Contacts.module.scss';

export const Contacts = () => {
    return (
        <div className={classes.contacts} id='contacts'>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.description}>
                        Let's create something amazing together
                    </div>
                    <p className={classes.connect}>Start by <span>saying hi</span></p>
                </div>
                <div className={classes.right}>
                    <p className={classes.title}>Information</p>
                    <p className={classes.address}>Dnipro, Ukraine</p>
                    <p className={classes.email}>a.karpukhin9@gmail.com</p>
                    <ul className={classes.list}>
                        <li className={classes.link}><a href="#main">Home</a></li>
                        <li className={classes.link}><a href="#about">About</a></li>
                        <li className={classes.link}><a href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};