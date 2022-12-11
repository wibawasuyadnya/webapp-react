import React, { Fragment, useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
import Nabvar from '../sections/Navbar';
import { Header } from '../sections/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Tools from '../sections/Tools';
import Portfolio from '../sections/Portfolio';
import Education from '../sections/Education';
import Project from '../sections/Project';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import ScrolltoTop from '../sections/Scroll';
import { Element } from "react-scroll";

function Home() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <Fragment>
       <div className={`${themeName} app`}>
          <header>
            <Header/>
            <Nabvar/>
          </header>
  
          <main>
              <Hero/>
            <Element name="section1">
              <About loading/>
              <Tools/>
            </Element>
            <Element name='section2'>
              <Portfolio/> 
            </Element>
            <Element name='section3'>
              <Education/>
            </Element>
            <Element name='section4'>
              <Project/>
            </Element>
            <Element name='section5'>
              <Contact/>
            </Element>
          </main>
          
          <Footer/>
          <ScrolltoTop/>
        </div>
    </Fragment>
  );
}

export default Home;
