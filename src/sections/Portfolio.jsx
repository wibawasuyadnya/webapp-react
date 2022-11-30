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
    const Title = (data.portfolio.title);
    const SlideOneProps = {
        ptechOne: (data.portfolio.iconListOne),
        pHeadTechOne: (data.portfolio.HeadingTitleOne),
        pDescTechOne: (data.portfolio.HeadingTitleOne),
    }
    const SlideTwoProps = {
        ptechTwo: (data.portfolio.iconListTwo),
        pHeadTechTwo: (data.portfolio.HeadingTitleTwo),
        pDescTechTwo: (data.portfolio.HeadingTitleTwo),
    }

    return(
        <Fragment>
            <div className="container mx-auto min-h-full my-8">
                <div className=" pt-7 pb-20 xs:pb-8">
                   <h2 className="text-5xl xs:text-3xl text-[color:var(--clr-heading)] font-inter-bold text-center "> {Title} </h2>
                </div>
                {/* Intial Swiper Modules install */}
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
                {/* Slide Element 1 */}
                <SwiperSlide>
                    <PortfolioSlideOne 
                        ptechOne={SlideOneProps.ptechOne} 
                        pHeadTechOne={SlideOneProps.pHeadTechOne} 
                        pDescTechOne={SlideOneProps.pDescTechOne} 
                    />
                </SwiperSlide>
                {/* Slide Element 2 */}
                <SwiperSlide>
                    <PortfolioSlideTwo 
                    ptechTwo={SlideTwoProps.ptechTwo} 
                    pHeadTechTwo={SlideTwoProps.pHeadTechTwo} 
                    pDescTechTwo={SlideTwoProps.pDescTechTwo} 
                    />
                </SwiperSlide>
                </Swiper>
            </div>
        </Fragment>
    );
};

export default Portfolio;