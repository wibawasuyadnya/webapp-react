import React, { Fragment } from "react";


const FirstEducation = ({...data}) => {
    return(
        <Fragment>
            <div>
                <div className="text-center flex flex-col space-y-2">
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-secondary)]" >{data.sdSchName}</h3>
                    <p className="text-base xs:text-sm font-inter-normal text-[color:var(--clr-body)]" >{data.sdSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-body)]" >{data.sdSchDesc}</h5>
                </div>
            </div>
        </Fragment>
    )
} 

const SecondEducation = ({...data}) => {
    return(
        <Fragment>
            <div>
                <div className="text-center flex flex-col space-y-2">
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-secondary)]">{data.smpSchName}</h3>
                    <p className=" text-base xs:text-sm font-inter-normal text-[color:var(--clr-body)]">{data.smpSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-body)]">{data.smpSchDesc}</h5>
                </div>
            </div>
        </Fragment>
    )
}

const ThirdEducation = ({...data}) => {
    return(
        <Fragment>
            <div>
                <div className="text-center flex flex-col space-y-2">
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-secondary)]">{data.smaSchName}</h3>
                    <p className="text-base xs:text-sm font-inter-normal text-[color:var(--clr-body)]">{data.smaSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-body)]">{data.smaSchDesc}</h5>
                </div>
            </div>
        </Fragment>
    )
}

const FourthEducation = ({...data}) => {
    return(
        <Fragment>
            <div>
                <div className="text-center flex flex-col space-y-2">
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-secondary)]">{data.clgSchName}</h3>
                    <p className="text-base xs:text-sm font-inter-normal text-[color:var(--clr-body)]">{data.clgSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-body)]">{data.clgSchDesc}</h5>
                </div>
            </div>
        </Fragment>
    )
}


export { FirstEducation, SecondEducation, ThirdEducation, FourthEducation };
