import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';

const NavBar = () => {
    return (
        
        <Toolbar>
            <Container maxWidth="sm">
                <div className='container-xxl d-flex justify-content-center'>
                    <Button variant="contained" startIcon={<InfoIcon/>}>
                        <Link to='./APropos.jsx'>À propos</Link>
                    </Button>
                    <Button variant="contained" startIcon={<SchoolIcon/>}>
                        <Link to='./SavoirFaire.jsx'>Savoir-faire</Link>
                    </Button>
                    <Button variant="contained" startIcon={<MailIcon/>}>
                        <Link to='./Contact.jsx'>Contact</Link>
                    </Button>
                </div>
            </Container>
        </Toolbar>
        
    );
}

export default NavBar;