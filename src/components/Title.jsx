import  {Typography}  from '@mui/material';
import {AppBar} from '@mui/material';
import { Container } from '@mui/system';
import { Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';

const Title = () => {
    return (
        <AppBar>
            <Toolbar>
                <Container maxWidth="sm">
                    <Button variant="contained" startIcon={<InfoIcon/>}>About</Button>
                    <Typography variant="h1">Etienne Trzpit</Typography>
                    <Typography variant="h2">Développeur web</Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Title;