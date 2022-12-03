import React, { Fragment } from "react";
import data from "../assets/data/data";
import { FirstEducation, SecondEducation, ThirdEducation, FourthEducation } from "./Education/EducationList";
import { Timeline, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineItem  } from "@mui/lab";
import { connectorStyle, separatorStyle, dotStyle } from "../assets/styles/TimelineStyle/Timeline";

function Education() {
  const eduProps = {
      edutitle: (data.education.title),
      educationData : (data.education.school),    
  } 
    return(
        <Fragment>

            <div className="container mx-auto min-h-full my-8">
                <div className=" pt-7 pb-20 xs:pb-10">
                    <h2 className="text-5xl xs:text-3xl text-[color:var(--clr-secondary)] font-inter-bold text-center ">{eduProps.edutitle}</h2>
                </div>
            {/* Content */}
             <FirstEducation 
                sdSchName={eduProps.educationData.sd.name} 
                sdSchDate={eduProps.educationData.sd.date} 
                sdSchDesc={eduProps.educationData.sd.desc} >
            </FirstEducation>
            
            {/* Timeline */}
            <Timeline>
              <TimelineItem>
                <TimelineSeparator theme={separatorStyle}> 
                  <TimelineDot theme={dotStyle}/>
                  <TimelineConnector theme={connectorStyle}/>
                  <TimelineDot theme={dotStyle}/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            </Timeline>

            {/* Content */}
            <SecondEducation 
                smpSchName={eduProps.educationData.smp.name} 
                smpSchDate={eduProps.educationData.smp.date} 
                smpSchDesc={eduProps.educationData.smp.desc} >
            </SecondEducation>        

            {/* Timeline */}
            <Timeline>
              <TimelineItem>
                <TimelineSeparator theme={separatorStyle}> 
                  <TimelineDot theme={dotStyle}/>
                  <TimelineConnector theme={connectorStyle} />
                  <TimelineDot theme={dotStyle}/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            </Timeline>
            
            {/* Content */}
            <ThirdEducation 
                smaSchName={eduProps.educationData.sma.name} 
                smaSchDate={eduProps.educationData.sma.date} 
                smaSchDesc={eduProps.educationData.sma.desc} >
            </ThirdEducation>

            {/* Timeline */}
            <Timeline>
              <TimelineItem>
                <TimelineSeparator theme={separatorStyle}> 
                  <TimelineDot theme={dotStyle}/>
                  <TimelineConnector theme={connectorStyle} />
                  <TimelineDot theme={dotStyle}/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            </Timeline>
            
            {/* Content */}
            <FourthEducation 
                clgSchName={eduProps.educationData.college.name}
                clgSchDate={eduProps.educationData.college.date}
                clgSchDesc={eduProps.educationData.college.desc} >
            </FourthEducation>

           </div> 
        </Fragment>
    )
}

export default Education;