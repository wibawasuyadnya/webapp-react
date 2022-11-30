import React, { Fragment } from "react";
import images from "../images/hero-data/agus.png";
import { FaEnvelope, FaGithub, FaDribbble, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import data from "../assets/data/data";
import { Button } from "@mui/material";
import { ButtonHero } from "../assets/styles/MaterialUIStyle/MuiComponent"; 
import Typed from "react-typed";


function Hero() {
  const heroProps = {
    heroData : (data.hero),
    socialData : (data.hero.social),
  }

  return (
    <Fragment>
       <div className="container w-full mx-auto min-h-full pt-36 pb-8">
            <div className="m-auto text-center flex flex-col items-center justify-center">
                <div className="">
                  <img src={images} width="140px" alt="logoMain" className="border-solid border-2 border-[#1a58a4] rounded-full m-auto"></img>
                </div> 
                <div className="">
                  <h1 className="text-[color:var(--clr-heading)] text-6xl xs:text-3xl tracking-wider pb-[10px] pt-[10px] font-inter-extra-bold">Hey, I'm {heroProps.heroData.name}</h1>
                  <h3 className="text-[color:var(--clr-typing)] text-2xl xs:text-lg tracking-wider pt-[10px] font-inter-semi-bold">
                  <Typed
                    strings={heroProps.heroData.occupation}  
                    typeSpeed={50}
                    backSpeed={20}
                    loop={true}
                    backDelay={2000}
                  />
                  </h3>
                <div className="flex flex-row align-center justify-center space-x-8 mt-5">
                    <Button
                      theme={ButtonHero} 
                      href={heroProps.heroData.resume}
                      target="_blank"
                      rel="noreferrer"
                      variant='outlined'
                      disableElevation
                      > 
                    Resume 
                    </Button>
                    <Button
                      theme={ButtonHero} 
                      href={heroProps.heroData.contact}
                      target="_blank"
                      rel="noreferrer"
                      variant='outlined'
                      disableElevation
                      > 
                    Contact 
                    </Button>                    
                </div>
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    className="text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={heroProps.socialData.github}
                    target="_blank" 
                  >
                    <FaGithub />
                    <span className="sr-only">Github</span>
                  </a>
                  <a
                    className="text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={heroProps.socialData.facebook}
                    target="_blank"
                  >
                    <FaFacebook />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    className="text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={heroProps.socialData.instagram}
                    target="_blank"
                  >
                    <FaInstagram />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    className="text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={heroProps.socialData.dribbble}
                    target="_blank"
                  >
                    <FaDribbble />
                    <span className="sr-only">Dribbble</span>
                  </a>
                  <a
                    className="text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={heroProps.socialData.twitter}
                    target="_blank"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    className="text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={heroProps.socialData.email}
                    target="_blank"
                  >
                    <FaEnvelope />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
        </div>
      </div>
    </Fragment>
    );
}

export default Hero;
