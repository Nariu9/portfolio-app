import React, {useEffect, useState} from 'react';
import classes from './Navbar.module.scss';
import bars from '../../images/bars-solid.svg'
import close from '../../images/xmark-solid.svg'
import linkedIn from '../../images/linkedin.svg'
import telegram from '../../images/telegram.svg'
import email from '../../images/envelope-regular.svg'


export const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <div className={classes.navbar}>
            <nav>
                <div className={classes.logo}>
                    <span className={classes.logoSpan}>Artem</span>Karpukhin
                </div>
                {(toggleMenu || screenWidth > 1024) && (
                    <ul className={classes.list}>
                        <li className={classes.links}>
                            <a href="#about">About</a>
                        </li>
                        <li className={classes.links}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className={classes.links}>
                            <a href="#contacts">Contacts</a>
                        </li>
                    </ul>
                )}
                <div className={classes.menuIcons}>
                    {toggleMenu
                        ? <img src={close}
                               className={classes.menuIcon}
                               alt="close"
                               onClick={() => setToggleMenu(false)}/>
                        : <img src={bars}
                               className={classes.menuIcon}
                               alt="open"
                               onClick={() => setToggleMenu(true)}/>}
                </div>
                <div className={classes.socials}>
                    <div className={classes.linkedIn}>
                        <img src={linkedIn} alt="linkedIn"/>
                        <p>LinkedIn</p>
                    </div>
                    <div className={classes.telegram}>
                        <img src={telegram} alt="telegram"/>
                        <p>Telegram</p>
                    </div>
                    <a href="#contacts">
                        <div className={classes.email}><img src={email} alt="email"/></div>
                    </a>
                </div>
            </nav>
        </div>
    );
};