import React from 'react';
import classes from './Main.module.scss';
import hero from '../../images/hero.png'
import react from '../../images/react.svg'
import redux from '../../images/redux.svg'
import typescript from '../../images/ts.svg'

export const Main = () => {
    return (
        <div className={classes.main} id="main">
            <div className={classes.container}>
                <div className={classes.left} data-aos="fade-right" data-aos-delay="500">
                    <p className={classes.subtitle}>Front-End Developer</p>
                    <div className={classes.title}>
                        <p>Talk is cheap.</p>
                        <p>Show me the code</p>
                    </div>

                    <div className={classes.info}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <a href="#contacts">let's chat!</a>
                </div>
                <div className={classes.right} data-aos="fade-left" data-aos-delay="1000">
                    <img src={hero} alt="hero" className={classes.hero}/>
                    <div className={classes.circle + ' ' + classes.react}>
                        <img src={react} alt="react"/>
                    </div>
                    <div className={classes.circle + ' ' + classes.redux}>
                        <img src={redux} alt="redux"/>
                    </div>
                    <div className={classes.circle + ' ' + classes.typescript}>
                        <img src={typescript} alt="typescript"/>
                    </div>
                </div>
                <div className={classes.info} data-aos="fade-up" data-aos-delay="1500">
                    <p className={classes.number}>4</p>
                    <p className={classes.description}>years experience</p>
                    <p className={classes.number}>14</p>
                    <p className={classes.description}>projects completed in different countries</p>
                </div>
            </div>
        </div>
    );
};