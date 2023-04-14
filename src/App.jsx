import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import CardTitle from './components/CardTitle';
import Stepper from './components/Stepper';

const App = () => {
    return (
        <div>
            <NavBar />
            <CardTitle />
            <Stepper />
        </div>
    );
}

export default App;