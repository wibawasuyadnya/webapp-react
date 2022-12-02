import React, { Fragment } from "react";
import images1 from "../images/about-data/about-set1.png";
import images2 from "../images/about-data/about-set2.png";
import images3 from "../images/about-data/about-set3.png";
import data from "../assets/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/autoplay';
import '../assets/styles/AboutStyle/about-slider.css';
// import required modules
import { EffectCards } from "swiper";

function About() {
   const aboutProps = {
        desc : (data.about.desc),
   }
    return (
        <Fragment>  
        <div id="about" className="container items-center w-full min-h-full pt-10 pb-20 xs:pt-5 xs:pb-10 mx-auto">
            <div>
                <div className="w-2/3 xs:w-10/12 xs:p-4 flex flex-row justify-center items-center xs:flex-col m-auto ">    
                    <Swiper perspective="false" autoplay={{ delay: 5000, disableOnInteraction: false }} effect={"cards"} grabCursor={true} modules={[EffectCards,Autoplay]} className="mySwiper xs:w-10/12 xs:order-2 xs:mx-auto">
                        <SwiperSlide className="mySwiperSlide "><img src={images1} alt="aboutPic"  className=" w-full h-full object-cover"/></SwiperSlide>
                        <SwiperSlide className="mySwiperSlide "><img src={images2} alt="aboutPic"  className=" w-full h-full object-cover"/></SwiperSlide>
                        <SwiperSlide className="mySwiperSlide "><img src={images3} alt="aboutPic"  className=" w-full h-full object-cover"/></SwiperSlide>
                     </Swiper>
                    <h2 className="text-xl xs:text-base text-[color:var(--clr-text)] font-inter-normal xs:pb-8 xs:order-1 mx-14 xs:mx-0 tracking-wide">{aboutProps.desc}</h2>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default About;