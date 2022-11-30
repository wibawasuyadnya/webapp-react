import React, { Fragment } from "react";

const SkillTech = ({ sname, sicon, shref }) => {
   return (
   <Fragment>
   <a href={shref} target="_blank" rel="noreferrer">
   <div className="m-2 w-[140px] xs:w-full flex-none mx-auto text-center p-5 rounded-[15px] hover:shadow-[0_0_30px_1px_rgba(0,0,0,0.3)] transition-all duration-150">
      {sicon}
      <p className="text-xl xs:text-base text-[color:var(--clr-text)] font-inter-medium mt-4">{sname}</p>
    </div> 
    </a>
    </Fragment>
   );
};


export default SkillTech;