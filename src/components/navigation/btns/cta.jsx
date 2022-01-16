import React from 'react';

//Create a button component where I can pass text into it

const CTAButton = (props) => {
    return(
        <>
            <div>
                <a>{props.text}</a>
            </div>
        </>
    )
}

export default CTAButton;
