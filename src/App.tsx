import React, {useEffect} from 'react';
import './App.scss';
import {Navbar} from './components/Navbar/Navbar';
import {Main} from './components/Main/Main';
import {About} from './components/About/About';
import {Footer} from './components/Footer/Footer';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    })

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
