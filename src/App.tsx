import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer/Footer';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import {Nav} from './components/Nav/Nav';
import {Skills} from './components/Skills/Skills';
import {ToastContainer} from 'react-toastify';


function App() {

    return (
        <div>
            <Nav/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
}

export default App;
