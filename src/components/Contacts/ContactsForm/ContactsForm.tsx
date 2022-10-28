import React from 'react';
import classes from './ContsctsForm.module.scss';
import {useFormik} from 'formik';
import {api} from '../../../api/api';


export type FormType = {
    name?: string
    email?: string
    message?: string
}

export const ContactsForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormType = {}
            if (!values.name) {
                errors.name = 'please enter your name';
            }

            if (!values.email) {
                errors.email = 'please enter your email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'please enter valid email address';
            }

            if (!values.message) {
                errors.message = 'please enter your message';
            } else if (values.message.length < 2) {
                errors.message = 'your message is too short';
            }

            return errors;
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values, {resetForm}) => {
            // console.log(JSON.stringify(values, null, 2));
            api.sendEmail(values)
            resetForm()
        }
    });
    return (
        <div className={classes.contactsBlock}>
            <div className={classes.contactsContainer}>
                <p>Get in Touch</p>
                <form onSubmit={formik.handleSubmit} className={classes.contactsForm}>
                    <input type="text" placeholder={'Name'} {...formik.getFieldProps('name')}/>
                    <p className={classes.error}>{formik.errors.name}</p>
                    <input type="text" placeholder={'E-mail'} {...formik.getFieldProps('email')}/>
                    <p className={classes.error}>{formik.errors.email}</p>
                    <textarea placeholder={'Message'} {...formik.getFieldProps('message')}/>
                    <p className={classes.error}>{formik.errors.message}</p>
                    <button type={'submit'} className={classes.sendBtn}>Send</button>
                </form>
            </div>
        </div>
    );
};