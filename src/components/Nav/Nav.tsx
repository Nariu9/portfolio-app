import React from 'react';
import classes from './Nav.module.scss';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiBriefcase, BiMessageDetail} from 'react-icons/bi';

type NavType = {
    activeLink: string
    setActiveLink: (link: string) => void
}

export const Nav: React.FC<NavType> = ({activeLink, setActiveLink}) => {

    const activeHandler = (link: string) => () => setActiveLink(link)

    return (
        <nav className={classes.nav}>
            <a href="#main" onClick={activeHandler('#main')}
               className={activeLink === '#main' ? classes.active : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={activeHandler('#about')}
               className={activeLink === '#about' ? classes.active : ''}><AiOutlineUser/></a>
            <a href="#skills" onClick={activeHandler('#skills')}
               className={activeLink === '#skills' ? classes.active : ''}><BiBook/></a>
            <a href="#projects" onClick={activeHandler('#projects')}
               className={activeLink === '#projects' ? classes.active : ''}><BiBriefcase/></a>
            <a href="#contacts" onClick={activeHandler('#contacts')}
               className={activeLink === '#contacts' ? classes.active : ''}><BiMessageDetail/></a>
        </nav>
    );
};