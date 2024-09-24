import React from 'react'
import Project from '../Project/Project'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../ProjectsSection/ProjectsSection.css'
import useMousePosition from '../../utils/useMousePosition'

const ProjectsSection = () => {
    const BASE_URL = 'https://portfolio-strapi-cms-494nt.ondigitalocean.app/api/projects?populate=*'
    const [projects, setProjects] = useState()

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch(BASE_URL)
            const projects = await res.json()
            setProjects(projects.data)
        }

        fetchProjects()
    }, [])
  
    const {x, y} = useMousePosition()

    return (
    <div id='project-section' className='mb-28 relative dark:bg-[#121212] dark:text-neutral-200'>
        <h2 className='w-full px-5 text-3xl mb-5'>Projects</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 w-full dark:text-neutral-200'>
            {projects && (
                projects.map((project, index) => (
                    <Link key={index} to={`/project/${project.id}`}>
                        <Project
                        src={project.attributes.CoverImage.data.attributes.formats.large.url}
                        title={project.attributes.Title}
                        description={project.attributes.Description}
                        />
                    </Link>
                ))
            )}
        </div>

        {/*Custom Cursor */}
        {/* <motion.div 
        animate={{
            WebkitMaskPosition: `${x}px ${y}px`
        }}
        transition={{
            type: 'tween',
            ease: 'backOut'
        }}
        className='mask h-full w-full absolute bg-black top-0 right-0 left-0'>
            Test
        </motion.div> */}
    </div>
)
}

export default ProjectsSection