import React, { Fragment } from 'react';
import { StyledSidebar } from '../../assets/styles/SidebarStyle/SidebarStyle';
import { bool, func } from 'prop-types';
import { Link } from "react-scroll";
import useMediaQuery from '@mui/material/useMediaQuery';


const Sidebar = ({ open, setOpen }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Fragment>
          { isMobile ? (
            <StyledSidebar open={open}>
              <Link to="section1" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                About
              </Link>
              <Link to="section2" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Portfolio
              </Link>
              <Link to="section3" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Education
              </Link>
              <Link to="section4" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Project
              </Link>
              <Link to="section5" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Contact
              </Link>
          </StyledSidebar>
          ):(
            <StyledSidebar open={open}>
              <Link to="section1" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                About
              </Link>
              <Link to="section2" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Portfolio
              </Link>
              <Link to="section3" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Education
              </Link>
              <Link to="section4" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Project
              </Link>
              <Link to="section5" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Contact
              </Link>
            </StyledSidebar>
          )}
    </Fragment>
  );
}



Sidebar.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Sidebar;
