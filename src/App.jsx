import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import CardTitle from './components/CardTitle';
import Stepper from './components/Stepper';

const App = () => {
    return (
        <div>
            <NavBar />
            <div className="main">          
                <CardTitle />         
                <div className="projets {/*alignement*/}d-flex justify-content-between">
                    <Stepper />
                    <Stepper />
                </div>
            </div>
            
        </div>
    );
}

export default App;