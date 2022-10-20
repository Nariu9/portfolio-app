import React from 'react';
import classes from './Projects.module.scss';
import cards from '../../images/social.webp'
import todo from '../../images/todo.png'
import socialNetwork from '../../images/social.webp'

export const Projects = () => {
    return (
        <div className={classes.projects}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <p className={classes.title}>My latest works</p>
                    <p className={classes.subtitle}>Perfect solutions for digital experience
                    </p>
                    <img src={cards} alt="cards" className={classes.projectImg}/>
                    <button className={classes.button}>All projects</button>
                    <p className={classes.extra}>Some projects not allowed to publish by NDA, if you want to see
                        more, <a href="#contacts">contact me</a></p>
                </div>
                <div className={classes.right}>
                    <img src={todo} alt="todoList" className={classes.projectImg}/>
                    <img src={socialNetwork} alt="socialNetwork" className={classes.projectImg}/>
                </div>
            </div>
        </div>
    );
};