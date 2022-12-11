import React, {useState} from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'; 
//components Sidebar 
import ButtonSidebar from './Sidebar/Burger';
import { Sidebar, Sidebarerror } from './Sidebar/Sidebar';

const Header = () => {
    const [open, setOpen] = useState(false);
    open ? disableBodyScroll(document) : enableBodyScroll(document);
    
    return (
        <header className='header'>
            <ButtonSidebar open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
        </header>
    )
}

const Headererror = () => {
    const [open, setOpen] = useState(false);
    open ? disableBodyScroll(document) : enableBodyScroll(document);

    return (
        <header className='header'>
            <ButtonSidebar open={open} setOpen={setOpen} />
            <Sidebarerror open={open} />
        </header>
    )
}

export { Header, Headererror };