import React, { Fragment } from "react";
import data from "../assets/data/data";
import {PortfolioSlideOne, PortfolioSlideTwo} from './Portfolio/SlidePortfolio';
// Swiper Core & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
//style Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../assets/styles/SwiperStyle/swiperstyle.css';


function Portfolio(){
     
    const ptechData = (data.portfolio)
    
     return(
        <Fragment>
            <div className="container mx-auto min-h-full my-8">
                <div className=" pt-7 pb-20 xs:pb-8">
                   <h2 className="text-5xl xs:text-3xl text-[color:var(--clr-heading)] font-inter-bold text-center "> {ptechData.title} </h2>
                </div>
            
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                      delay: 8000,
                      disableOnInteraction: true,
                    }}
                    pagination={{ clickable: true }}
                >
                
                <SwiperSlide>
                    <PortfolioSlideOne 
                        ptechOne={ptechData.iconListOne} 
                        pHeadTechOne={ptechData.HeadingTitleOne} 
                        pDescTechOne={ptechData.HeadingTitleOne} 
                    />
                </SwiperSlide>
                
                <SwiperSlide>
                    <PortfolioSlideTwo 
                    ptechTwo={ptechData.iconListTwo} 
                    pHeadTechTwo={ptechData.HeadingTitleTwo} 
                    pDescTechTwo={ptechData.HeadingTitleTwo} 
                    />
                </SwiperSlide>
                </Swiper>
            </div>
        </Fragment>
    );
};

export default Portfolio;