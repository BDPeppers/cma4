import React from 'react';
import { Button } from '@mui/material';
//Create a button component where I can pass text into it

const CTAButton = (props) => {
    return(
        <>
            <Button className='cma-cta-btn' variant={props.variant}>{props.text}</Button>
        </>
    )
}

export default CTAButton;
