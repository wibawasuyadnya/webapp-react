import React, { Fragment } from 'react';
import data from '../assets/data/data';
import { Divider } from '@mui/material';
import { FaEnvelope, FaGithub, FaDribbble, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { DividerStyle } from '../assets/styles/MaterialUIStyle/MuiComponent'
import image from '../images/footer-data/BannerFooter.webp';

function getYearData() {
  var year = new Date().getFullYear();
  return year;
};

function Footer() {
  const footerdata = {
     ftrData: (data.footer),
     cpyrData: (data.footer.copyright),
     sclData: (data.footer.social)
  }
    return (
      <Fragment>
      <div className='bg-[color:var(--clr-tertiary)] min-h-full py-8 mx-auto'>
         <div className='container mx-auto flex flex-row xs:flex-col'>
          <div className='flex items-center justify-start xs:justify-center w-2/4 xs:w-full'>
                <img alt='footer logo' className='float-left xs:float-none' src={image} width={250}/>
          </div>
          <div className='flex items-center justify-end xs:justify-center w-2/4 xs:w-full'>
                <h4 className='float-right xs:float-none'>  </h4>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    className="text-xl p-2 text-white hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={footerdata.sclData.github}
                    target="_blank" 
                    rel="noreferrer"                 
                    >
                    <FaGithub />
                    <span className="sr-only">Github</span>
                  </a>
                  <a
                    className="text-xl p-2 text-white hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={footerdata.sclData.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    className="text-xl p-2 text-white hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={footerdata.sclData.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    className="text-xl p-2 text-white hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={footerdata.sclData.dribbble}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaDribbble />
                    <span className="sr-only">Dribbble</span>
                  </a>
                  <a
                    className="text-xl p-2 text-white hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={footerdata.sclData.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    className="text-xl p-2 text-white hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300"
                    href={footerdata.sclData.email}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaEnvelope />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
          </div>
          </div>           
            <Divider 
            theme={DividerStyle}
            variant="middle"
            margin="100px 0"/>
          <div className='flex flex-col items-center space-y-2 justify-center'>
                <h5 className='text-white text-base font-inter-regular'>{footerdata.ftrData.desc}</h5>
                <p className='text-white text-xs font-inter-regular'> {footerdata.cpyrData.before}  {getYearData()} {footerdata.cpyrData.after} </p>           
          </div>    
      </div>
      </Fragment>
    );
  };
  
  export default Footer;