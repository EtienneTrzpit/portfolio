import React from 'react';
import './App.scss';
import { Typography } from '@mui/material';
import Background from './components/Background';

const App = () => {
    return (
        <div className='main'>
            <Background />
            <Typography variant="h1">Hello, World!</Typography>
        </div>
    );
}

export default App;