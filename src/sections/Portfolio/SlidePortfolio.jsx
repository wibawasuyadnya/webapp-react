import React, { Fragment } from "react";
import imageWnf from "../../images/portfolio-data/wnf.png";
import imageAgb from "../../images/portfolio-data/agb.png";

//Component for Icon Here
//Icon One
 const PortfolioIconOne = ({ ...data }) => {
    return(
        <Fragment> 
            <div>
            <div className="flex xs:justify-center xs:items-center">{data.piconOne}</div>
            </div>
        </Fragment>
    );
};
//Icon Two
const PortfolioIconTwo = ({ ...data }) => {
    return (
        <Fragment>
            <div>
            <div className="flex xs:justify-center xs:items-center">{data.piconTwo}</div>
            </div>
        </Fragment>
    );
};
//End of Component for Icon 

//Component for Heading Here
//Heading One
const PortfolioHeadingOne = ({...data }) => {
    return (
        <Fragment>
            <div>
                <h3 className="font-inter-semi-bold text-3xl xs:text-2xl xs:text-center text-[color:var(--clr-heading)] ">{data.pHeadOne}</h3>
            </div>
        </Fragment>      
    );
};
//Heading Two
const PortfolioHeadingTwo = ({...data}) => {
    return (
        <Fragment>
            <div>
                <h3 className="font-inter-semi-bold text-3xl xs:text-2xl xs:text-center  text-[color:var(--clr-heading)] ">{data.pHeadTwo}</h3>
            </div>
        </Fragment>
    );
};
//End of Component for Heading

//Component for Description Here
//Description One
const PortfolioDescOne = ({...data}) => {
    return (
        <Fragment>
            <div>
                <p className="font-inter-normal text-lg xs:text-base xs:text-center text-[color:var(--clr-text)] tracking-wide">{data.pDescOne}</p>
            </div>
        </Fragment>
    );
};
//Description Two
const PortfolioDescTwo = ({...data}) => {
    return ( 
        <Fragment>
            <div>
                <p className="font-inter-normal text-lg xs:text-base xs:text-center text-[color:var(--clr-text)] tracking-wide">{data.pDescTwo}</p>
            </div>
        </Fragment>
    );
};
//End of Component for Description

    
// Merge all components array element below
//Slide One
function PortfolioSlideOne({...data}) {
    return(
        <Fragment>
            <div className="container flex xs:flex-col mx-auto w-10/12">
                <div className="w-2/4 xs:w-full pr-6 xs:pr-0">
                    {
                        data.pHeadTechOne.map((HeadingTitleOne, index) => {
                            return (
                                <PortfolioHeadingOne
                                key={index}
                                pHeadOne={HeadingTitleOne.PortfolioHeading}
                                />
                            )
                        })
                    }
                <div className="w-[350px] xs:w-10/12 xs:mx-auto ">    
                    <div className="grid grid-cols-4 justify-center mt-3.5 mb-5">
                    {
                        data.ptechOne.map((iconListOne, index) => {
                            return(
                                <PortfolioIconOne
                                key={index}
                                piconOne={iconListOne.PortfolioIcon}
                                />
                            )
                        })
                    }
                </div>   
                    </div>
                    <div>
                    {
                        data.pDescTechOne.map((HeadingTitleOne, index) => {
                            return(
                                <PortfolioDescOne
                                key={index}
                                pDescOne={HeadingTitleOne.PortfolioDescription}
                                />
                            )
                        })
                    }
                    </div>
                </div> 
                <div className="w-3/5 xs:w-full xs:mt-4 flex items-center">
                    <img className="rounded-[15px]" alt="Wealthandfreedom" src={imageWnf} />
                </div>
            </div>
        </Fragment>
    );
};


//Slide Two
function PortfolioSlideTwo({...data}) {
    return(
    <Fragment>
        <div className="container flex xs:flex-col mx-auto w-10/12">
            <div className="w-2/4 xs:w-full pr-6 xs:pr-0 ">
                    {
                        data.pHeadTechTwo.map((HeadingTitleTwo, index) => {
                            return (
                                <PortfolioHeadingTwo
                                key={index}
                                pHeadTwo={HeadingTitleTwo.PortfolioHeading}
                                />
                            )
                            })
                    }
                <div className="w-[350px] xs:w-10/12 xs:mx-auto " >   
                    <div className="grid grid-cols-4 justify-center mt-3.5 mb-5">
                    {
                        data.ptechTwo.map((iconListTwo, index) => {
                            return(
                                <PortfolioIconTwo
                                key={index}
                                piconTwo={iconListTwo.PortfolioIcon}
                                />
                            )
                        })
                    }
                    </div>   
                </div>
                    {
                        data.pDescTechTwo.map((HeadingTitleTwo, index) => {
                            return(
                                <PortfolioDescTwo
                                key={index}
                                pDescTwo={HeadingTitleTwo.PortfolioDescription}
                                />
                            )
                        })
                    }
            </div> 
            <div className="w-3/5 xs:w-full xs:mt-4 flex items-center ">
                <img className="rounded-[15px]" alt="AllGoodBud" src={imageAgb} />
            </div>
        </div>
    </Fragment>
    );
};

export { PortfolioSlideOne, PortfolioSlideTwo };