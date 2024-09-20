import React from 'react'
import Project from '../Project/Project'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
  
    return (
    <div className='mb-28'>
        <h2 className='w-full px-5 text-3xl mb-5'>Projects</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
            {projects && (
                projects.map((project, index) => (
                    <Link to={`/project/${project.id}`}>
                        <Project
                        key={index}
                        src={project.attributes.CoverImage.data.attributes.formats.large.url}
                        title={project.attributes.Title}
                        description={project.attributes.Description}
                        />
                    </Link>
                ))
            )}
        </div>
    </div>
)
}

export default ProjectsSection