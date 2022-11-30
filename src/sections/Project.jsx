import React, { Fragment } from 'react';
import data from '../assets/data/data';
import axios from 'axios';
import ProjectCard from './Project/ProjectCard';
import { useState, useEffect } from 'react';

function Project() {
    const [project, setProject] = useState('');
    const title = (data.project.title);

    useEffect(()=>{
       getAllProject();
       
    },[])

    const getAllProject = () => {
        axios.get('project.json')
        .then((response) => {
            const allProjects = response.data.allProjects;
            setProject(allProjects);
        })
        .catch(error => console.error(`Error: ${error}`));
    }



    return (
       <Fragment>
        <div className='mx-auto w-full my-16'>
            <h2 className='text-center text-[color:var(--clr-heading)] pt-7 pb-20 xs:pb-10 text-5xl xs:text-3xl font-inter-bold'>{title}</h2>
            <ProjectCard projects={project}/>
        </div>
       </Fragment>
    )
}
export default Project;