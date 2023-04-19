import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import CardTitle from './components/CardTitle';
import Stepper from './components/Stepper';
import { Route, Routes } from 'react-router-dom';
import APropos from './components/APropos';
import SavoirFaire from './components/SavoirFaire';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='./components/APropos.jsx' element={<APropos />} />
                <Route path='./components/SavoirFaire.jsx' element={<SavoirFaire />} />
                <Route path='./components/Contact.jsx' element={<Contact />} />
            </Routes>
            <div className="main">          
                <CardTitle />         
                <div className="projets {/*alignement*/} d-flex flex-wrap">
                    <Stepper />
                    <Stepper />
                    <Stepper />
                    <Stepper />
                    <Stepper />
                    <Stepper />
                    <Stepper />
                    <Stepper />
                    <Stepper />
                    <Stepper />                   
                </div>
            </div>
            
        </div>
    );
}

export default App;