import emailjs from '@emailjs/browser';
import {FormType} from '../components/Contacts/ContactsForm/ContactsForm';
import {toast} from 'react-toastify';


export const api = {
    sendEmail(data: Required<FormType>) {
        emailjs.send('service_x1g04sz', 'template_hajqy3c', data, 'D1uooWrn5oFlP4B2H')
            .then((result) => {
                toast.success('Message sent! I will contact you as soon as possible.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            }, (error) => {
                toast.error('Something went wrong, please try again later.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            });
    }
}