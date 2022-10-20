import React from 'react';
import './App.scss';
import {Navbar} from './components/Navbar/Navbar';
import {Main} from './components/Main/Main';
import {About} from './components/About/About';
import {Footer} from './components/Footer/Footer';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Main/>
            <About/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
