import React, { Fragment, useContext } from 'react';
import images from "../../src/images/404-data/agussad.webp";
import { ThemeContext } from '../contexts/theme';
import { Headererror } from '../sections/Header';
import Nabvar from '../sections/Navbar';
import Footer from '../sections/Footer';

function Notfound() {
    const [{ themeName }] = useContext(ThemeContext);
    return(
        <Fragment>
         <div className={`${themeName} app`}>   
            <header>
                <Headererror/>
                <Nabvar/>
            </header>
            <main>
                <div className="container w-full mx-auto min-h-screen flex flex-col items-center justify-center space-y-3">
                    <img src={images} width="140px" alt="logoMain" className="border-solid border-2 border-[#1a58a4] rounded-full"></img>
                    <h1 className=" text-[color:var(--clr-secondary)] text-[150px] xs:text-[100px] xs:leading-tight pb-[10px] pt-[10px] font-inter-extra-bold">404</h1>
                    <h2 className=" text-[color:var(--clr-secondary)] text-5xl xs:text-5xl xs:leading-tight pb-[10px] pt-[10px] font-inter-bold">Oopsy, I Think You're Lost</h2>
                    <p className=' text-[color:var(--clr-body)] text-lg xs:text-base font-inter-medium'>Sorry, we couldn't find the pages you're looking for.</p>
                    <p className=' text-[color:var(--clr-body)] text-lg xs:text-base font-inter-medium'>Use Sidebar to navigate back to home :3</p>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>  
     </Fragment>
    )
}

export default Notfound;