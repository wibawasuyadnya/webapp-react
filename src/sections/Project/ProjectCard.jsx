import React, { Fragment } from 'react';
import { Box, Card, Typography, CardContent, Tooltip, IconButton } from '@mui/material/';
import { GitHub } from '@mui/icons-material';
import {TypoHeading, CardContet, CardStyle, CardButton} from '../../assets/styles/MaterialUIStyle/MuiComponent'


function ProjectCard(props) {

    const displayProject = (props) => {
        const { projects } = props;

        if(projects.length > 0) {
            return (
            <div className="container w-3/4 xs:w-10/12 mx-auto">
                <div className='grid gap-5 xs:gap-10 grid-cols-3 xs:grid-cols-1 px-7 xs:px-0'> 
                {
                    projects.map(( project ) => {
                        return(
                        <Fragment key={project.id}>
                            <Box justifyItems="center">
                                <Card variant='outlined' theme={CardStyle}>
                                    <CardContent theme={CardContet}>
                                        <Typography  
                                            theme={TypoHeading} 
                                            variant='h4' 
                                            component="div">
                                            {project.title}
                                        </Typography>
                                        <Typography 
                                            className='text-base text-[color:var(--clr-text)] font-inter-normal' 
                                            variant='body' 
                                            component="div">
                                            {project.desc}
                                        </Typography>
                                        <ul className='flex flex-row gap-2'>       
                                            {
                                            project.stack.map(( stack, index ) => {
                                                return(
                                                    <Fragment key={index}>
                                                        <li className='text-[color:var(--clr-text)] text-sm font-inter-medium'>
                                                        {stack}
                                                        </li>    
                                                    </Fragment>
                                                )    
                                            })
                                            }         
                                        </ul> 
                                    <Tooltip title="See Project" placement='right-start'>
                                        <IconButton 
                                         theme={CardButton}  
                                         size="small" 
                                         href={project.link}
                                         rel="noreferrer" 
                                         target="_blank">
                                             <GitHub/>
                                        </IconButton>
                                    </Tooltip>   
                                    </CardContent>
                                </Card>
                            </Box>    
                        </Fragment>
                        )
                    })
                }
                </div>    
            </div>
            )
        } else {
            return (<Fragment><h3>No Project Listed Madafaka</h3></Fragment>)
        }
    }

    return (
        <Fragment>
            {displayProject(props)}
        </Fragment>        
    )
    
}

export default ProjectCard;