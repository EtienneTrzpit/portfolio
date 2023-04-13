import React from 'react';
import { Typography } from '@mui/material';
import Background from './components/Background';

const App = () => {
    return (
        <div>
            <Background />
            <Typography variant="h1">Hello, World!</Typography>
        </div>
    );
}

export default App;