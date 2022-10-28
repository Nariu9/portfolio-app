import React from 'react';
import classes from './Projects.module.scss';
import cards from '../../assets/images/Cards.png'
import todo from '../../assets/images/TodoList.png'
import socialNetwork from '../../assets/images/SocialNetwork.png'
import {Zoom} from 'react-awesome-reveal';
import {Project} from './project/Project';
import {Title} from '../../common/components/Title/Title';
import {FaRegEnvelope} from 'react-icons/fa';

export const Projects = () => {

    const content = [
        {
            id: 0,
            style: {
                backgroundImage: `url(${cards})`,
            },
            code: 'https://github.com/ticket1201/cards_quiz',
            demo: 'https://ticket1201.github.io/cards_quiz/',
            title: 'Card Quiz',
            description: 'An application for consolidating existing knowledge or learning something new'
        },
        {
            id: 1,
            style: {
                backgroundImage: `url(${todo})`,
            },
            code: 'https://github.com/Nariu9/todolist-ts',
            demo: 'https://nariu9.github.io/todolist-ts/',
            title: 'To-do List',
            description: 'Reflection of those things that need to be done, bought or just remembered'
        },
        {
            id: 2,
            style: {
                backgroundImage: `url(${socialNetwork})`,
            },
            code: 'https://github.com/Nariu9/social-network-ts',
            demo: 'https://nariu9.github.io/social-network-ts/',
            title: 'Social Network',
            description: 'A place to post some information and make new connections'
        }
    ]

    return (
        <div className={classes.projects} id="projects">
            <div className={classes.container}>
                <Title title={'My latest works'}/>
                <p className={classes.subtitle}>The presented projects were developed by me personally or as part of a
                    team. They can still be improved in many ways.</p>
                <div className={classes.wrapper}>
                    <Zoom cascade damping={0.2}>
                        <Project style={content[0].style} code={content[0].code} demo={content[0].demo}
                                 title={content[0].title} description={content[0].description}/>
                        <Project style={content[1].style} code={content[1].code} demo={content[1].demo}
                                 title={content[1].title} description={content[1].description}/>
                        <Project style={content[2].style} code={content[2].code} demo={content[2].demo}
                                 title={content[2].title} description={content[2].description}/>
                    </Zoom>
                </div>
                <div className={classes.info}>
                    <p className={classes.extra}>If you want to see more, feel free to contact me any time
                    </p>
                    <a href="mailto:a.karpukhin9@gmail.com"><FaRegEnvelope className={classes.email}/></a>
                </div>
            </div>
        </div>
    );
};