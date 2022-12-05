import React from "react";
import { Fragment } from "react";
import SkillTech from "./Tools/SkillTech";
import data from "../assets/data/data";

function Tools(){
  const toolsProps = {
    title : (data.tools.title),
    tech : (data.tools.skills),
  };
  return (
 <Fragment>
      <div className="container min-h-[300px] mb-10 mx-auto">
        <div>
          <h2 className="text-center text-5xl xs:text-4xl text-[color:var(--clr-secondary)] font-inter-bold">{toolsProps.title}</h2>
        </div>
        <div className="grid grid-cols-4 xs:px-3 xs:grid-cols-3 align-center justify-center max-w-xl mx-auto mt-10">
      {
        toolsProps.tech.map((skills, index) => { 
            return (
              <SkillTech 
                key={index} 
                shref={skills.skillLink} 
                sname={skills.skillName} 
                sicon={skills.skillIcon}/> 
            )
        })
      }
    </div>
      </div>
  </Fragment>
  );
};  

export default Tools;