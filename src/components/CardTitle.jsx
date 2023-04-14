import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Title from './Title';
import photoEtienne from './../assets/photoEtienne.png';
import React from 'react';

const CardTitle =() => {
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="photo Etienne Trzpit"
                height="140"
                image={photoEtienne}
            />
            <CardContent>
                <Title name="Etienne Trzpit" description="Développeur web" />
            </CardContent>
      </Card>
    );
}

export default CardTitle;