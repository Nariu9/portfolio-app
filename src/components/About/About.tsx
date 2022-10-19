import React from 'react';
import classes from './About.module.scss';
import react from '../../images/react.svg'
import redux from '../../images/redux.svg'
import ts from '../../images/ts.svg'


export const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.left}>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <p className={classes.cardTitle}>Design</p>
                            <img src={react} alt="react" className={classes.cardIcon}/>
                        </div>
                        <p className={classes.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</p>
                        <p className={classes.cardLink}>20 projects</p>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <p className={classes.cardTitle}>Front-end</p>
                            <img src={redux} alt="redux" className={classes.cardIcon}/>
                        </div>
                        <p className={classes.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</p>
                        <p className={classes.cardLink}>53 projects</p>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <p className={classes.cardTitle}>SEO</p>
                            <img src={ts} alt="ts" className={classes.cardIcon}/>
                        </div>
                        <p className={classes.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</p>
                        <p className={classes.cardLink}>5 projects</p>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <p className={classes.subtitle}>Introduce</p>
                <p className={classes.title}>Hello! I'm Artem Karpukhin</p>
                <p className={classes.info}>Some story about skill, bla bla bla</p>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam aspernatur at
                    consectetur consequatur corporis fugiat laborum nesciunt nulla officia perferendis praesentium quam
                    quis repellat reprehenderit similique, veritatis voluptatibus!
                </p>
            </div>
        </div>
    );
};