import React from 'react';
import classes from './Skill.module.scss';

type SkillType = {
    title: React.ReactNode
    icon: React.ReactNode
}

export const Skill: React.FC<SkillType> = ({title, icon}) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardTop}>
                <p className={classes.cardTitle}>{title}</p>
                {icon}
            </div>
        </div>
    );
};