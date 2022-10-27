import React, {FC} from 'react';
import classes from './Project.module.scss';

type ProjectType = {
    style: { backgroundImage: string }
    code: string
    demo: string
    title: string
    description: string
}

export const Project: FC<ProjectType> = ({style, code, demo, title, description}) => {
    return (
        <div className={classes.project}>
            <div className={classes.imageBlock} style={style}>
                <a className={classes.link} href={code} target={'_blank'} rel={'noreferrer'}>Code</a>
                <a className={classes.link} href={demo} target={'_blank'} rel={'noreferrer'}>Demo</a>
            </div>
            <div className={classes.descriptionBlock}>
                <h3 className={classes.projectTitle}>{title}</h3>
                <span className={classes.description}>{description}</span>
            </div>
        </div>
    );
};