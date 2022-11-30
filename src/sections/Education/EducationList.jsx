import {React, Fragment} from "react";


const FirstEducation = ({...data}) => {
    return(
        <Fragment>
            <div>
                <div className="text-center flex flex-col space-y-2">
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]" >{data.sdSchName}</h3>
                    <p className="text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]" >{data.sdSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]" >{data.sdSchDesc}</h5>
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
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]">{data.smpSchName}</h3>
                    <p className=" text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]">{data.smpSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]">{data.smpSchDesc}</h5>
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
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]">{data.smaSchName}</h3>
                    <p className="text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]">{data.smaSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]">{data.smaSchDesc}</h5>
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
                    <h3 className="text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]">{data.clgSchName}</h3>
                    <p className="text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]">{data.clgSchDate}</p>
                    <h5 className="text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]">{data.clgSchDesc}</h5>
                </div>
            </div>
        </Fragment>
    )
}


export { FirstEducation, SecondEducation, ThirdEducation, FourthEducation };
