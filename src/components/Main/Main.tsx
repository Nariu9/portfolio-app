import React from 'react';
import classes from './Main.module.scss';
import react from '../../assets/icons/react.svg'
import redux from '../../assets/icons/redux.svg'
import typescript from '../../assets/icons/ts.svg'
import CV from '../../assets/docs/CV.pdf'
import {Fade} from 'react-awesome-reveal';

export const Main = () => {
    return (
        <div className={classes.main} id="main">
            <Fade delay={500}><p className={classes.mainTitle}>Hi, I'm Artem Karpukhin</p></Fade>
            <div className={classes.container}>
                <Fade delay={1500} direction={'left'}>
                    <div className={classes.left}>
                        <p className={classes.subtitle}>Front-End Developer</p>
                        <p className={classes.title}>
                            I am a software engineer specializing in creating client-oriented SPAs and user-centric
                            interfaces.
                        </p>
                        <p className={classes.info}>
                            In my work, I have found the combination of TypeScript with React and Redux to be the best
                            way to write smooth, clean and carefully crafted code.
                        </p>
                        <div className={classes.links}>
                            <a href="#contacts">let's chat!</a>
                            <a href={CV} download>Download CV</a>
                        </div>
                    </div>
                </Fade>
                <Fade delay={1000}>
                    <div className={classes.right}>
                        <div className={classes.hero}/>
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
                </Fade>
            </div>
        </div>
    );
};