import React from 'react';
import classes from './Skills.module.scss';
import {Fade} from 'react-awesome-reveal';
import {FaGitAlt, FaNodeJs, FaReact} from 'react-icons/fa';
import {SiDatabricks, SiJest, SiMaterialui, SiPostman, SiRedux, SiStorybook, SiTypescript} from 'react-icons/si';
import {Skill} from './Skill/Skill';
import {TbLetterA} from 'react-icons/tb';
import {GiFishingHook} from 'react-icons/gi';


export const Skills = () => {
    return (
        <div className={classes.skills} id="skills">
            <div className={classes.container}>
                <h2>My Tech Stack</h2>
                <p className={classes.subtitle}>My work gives me the opportunity to get acquainted with various
                    development tools. I appreciate it and am always happy to try something new. Here are some of them
                    that I have the most experience with:</p>
                <div className={classes.cards}>
                    <Fade cascade damping={0.1} direction={'up'}>
                        <Skill title={'React'} icon={<FaReact className={classes.cardIcon}/>}/>
                        <Skill title={'Redux / Toolkit'} icon={<SiRedux className={classes.cardIcon}/>}/>
                        <Skill title={'Node.js'} icon={<FaNodeJs className={classes.cardIcon}/>}/>
                        <Skill title={'TypeScript'} icon={<SiTypescript className={classes.cardIcon}/>}/>
                        <Skill title={'Git'} icon={<FaGitAlt className={classes.cardIcon}/>}/>
                        <Skill title={'Jest'} icon={<SiJest className={classes.cardIcon}/>}/>
                        <Skill title={'Storybook'} icon={<SiStorybook className={classes.cardIcon}/>}/>
                        <Skill title={'Axios'} icon={<TbLetterA className={classes.cardIcon}/>}/>
                        <Skill title={'Material UI'} icon={<SiMaterialui className={classes.cardIcon}/>}/>
                        <Skill title={'Formik'} icon={<SiDatabricks className={classes.cardIcon}/>}/>
                        <Skill title={'React Hook Form'} icon={<GiFishingHook className={classes.cardIcon}/>}/>
                        <Skill title={'Postman'} icon={<SiPostman className={classes.cardIcon}/>}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};