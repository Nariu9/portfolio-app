import React, {ReactElement} from 'react';
import classes from './Skill.module.scss';

type SkillType = {
    title: string
    icon: ReactElement
}

export const Skill: React.FC<SkillType> = ({title, icon}) => {
    return (
        <div className={classes.card}>
            <p className={classes.cardTitle}>{title}</p>
            {icon}
        </div>
    );
};