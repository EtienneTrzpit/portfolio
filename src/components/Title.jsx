import  {Typography}  from '@mui/material';
import {AppBar} from '@mui/material';
import { Container } from '@mui/system';
import { Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';

const Title = () => {
    return (
        <AppBar>
            <Toolbar>
                <Container maxWidth="sm">
                    <div className='container-xxl d-flex justify-content-center'>
                        <Button variant="contained" startIcon={<InfoIcon/>}>À propos</Button>
                        <Button variant="contained" startIcon={<SchoolIcon/>}>Savoir-faire</Button>
                        <Button variant="contained" startIcon={<MailIcon/>}>Contact</Button>
                    </div>
                    <Typography variant="h1">Etienne Trzpit</Typography>
                    <Typography variant="h2">Développeur web</Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Title;