import { Typography } from '@mui/material';
import React from 'react'

const Title =(props) => {
    return(
        <>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description}
            </Typography>
        </>
    );
}

export default Title;