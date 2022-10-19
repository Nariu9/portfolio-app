import React from 'react';
import classes from './Footer.module.scss';
import linkedIn from '../../images/linkedin.svg'
import telegram from '../../images/telegram.svg'
import github from '../../images/github.svg'
import codeWars from '../../images/codewars.svg'

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.rights}>
                <p className={classes.name}>
                    <span>Artem</span>Karpukhin
                </p>
                <p className={classes.copyRights}>&#169; 2022 All rights reserved</p>
            </div>
            <div className={classes.socials}>
                <img src={linkedIn} alt="linkedIn" className={classes.socialIcon}/>
                <img src={telegram} alt="telegram" className={classes.socialIcon}/>
                <img src={github} alt="github" className={classes.socialIcon}/>
                <img src={codeWars} alt="codeWars" className={classes.socialIcon}/>
            </div>
        </div>
    );
};