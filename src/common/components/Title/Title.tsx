import React, {FC} from 'react';
import classes from './Title.module.scss';

type TitleType = {
    title: string
}
export const Title: FC<TitleType> = ({title}) => {
    return (
        <h2 className={classes.title}>{title}</h2>
    );
};