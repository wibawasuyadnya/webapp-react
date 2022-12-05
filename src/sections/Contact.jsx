import React, { Fragment } from 'react';
import data from '../assets/data/data';
import { Button } from '@mui/material';
import { ButtonContact } from '../assets/styles/MaterialUIStyle/MuiComponent';



function Contact(){
    const ctProps = {
        contact: (data.contact),
        button: (data.contact.button)
    }
    return(
        <Fragment>
            <div className='container flex flex-col justify-center items-center space-y-8 mx-auto w-full xs:px-5 min-h-[400px]'>
                    <h1 className=' text-center text-4xl xs:text-4xl font-inter-bold text-[color:var(--clr-secondary)]'>{ctProps.contact.heading}</h1>
                    <Button
                            disableElevation
                            theme={ButtonContact}
                            href={ctProps.button.link}
                            target="_blank" 
                            rel="noreferrer" >
                                {ctProps.button.placeholder}
                    </Button>    
            </div>
        </Fragment>
    )
}


export default Contact;