import React from 'react';
import classes from './Nav.module.scss';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiBriefcase, BiMessageDetail} from 'react-icons/bi';
import Scrollspy from 'react-scrollspy';


export const Nav = () => {

    return (
        <nav>
            <Scrollspy items={['main', 'skills', 'projects', 'contacts']} currentClassName={classes.active}
                       className={classes.nav}>
                <a href="#main"><AiOutlineUser/></a>
                <a href="#skills"><BiBook/></a>
                <a href="#projects"><BiBriefcase/></a>
                <a href="#contacts"><BiMessageDetail/></a>
            </Scrollspy>
        </nav>
    );
};