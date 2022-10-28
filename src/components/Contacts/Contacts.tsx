import React from 'react';
import classes from './Contacts.module.scss';
import {Title} from '../../common/components/Title/Title';
import {BsGithub, BsLinkedin, BsTelegram} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';
import {FaEnvelope} from 'react-icons/fa';
import {ContactsForm} from './ContactsForm/ContactsForm';

export const Contacts = () => {
    return (
        <div className={classes.contacts} id="contacts">
            <div className={classes.container}>
                <Title title={'Let\'s create something amazing together'}/>
                <div className={classes.wrapper}>
                    <div className={classes.socials}>
                        <p className={classes.subtitle}>How about <span>say hi ? </span>Contact me via socials or just fill out the form.</p>
                        <div className={classes.icons}>
                            <a href="https://t.me/tema_213" target={'_blank'} rel={'noreferrer'}><BsTelegram/></a>
                            <a href="https://github.com/Nariu9" target={'_blank'} rel={'noreferrer'}><BsGithub/></a>
                            <a href="https://www.linkedin.com/in/artem-karpukhin/" target={'_blank'} rel={'noreferrer'}><BsLinkedin/></a>
                            <a href="https://www.codewars.com/users/Nariu9" target={'_blank'} rel={'noreferrer'}><SiCodewars/></a>
                            <a href="mailto:a.karpukhin9@gmail.com"><FaEnvelope/></a>
                        </div>
                    </div>
                    <div className={classes.message}>
                        <ContactsForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};