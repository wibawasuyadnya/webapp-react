import React, {useState} from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'; 
//components Sidebar 
import ButtonSidebar from './Sidebar/Burger';
import Sidebar from './Sidebar/Sidebar';

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

export default Header;