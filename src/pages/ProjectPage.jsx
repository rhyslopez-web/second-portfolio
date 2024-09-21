import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SecondaryHeading from '../components/SecondaryHeading/SecondaryHeading'
import Button from '../components/Button/Button'
import Transition from '../components/Transition/Transition'

const ProjectPage = () => {

    const params = useParams()    
    const [project, setProject] = useState()

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`https://portfolio-strapi-cms-494nt.ondigitalocean.app/api/projects/${params.id}?populate=*`)
            const project = await res.json()
            setProject(project.data)
        }

        fetchProject()
    }, [params])

  return (
    <div className='flex justify-center mb-28 mt-5'>
        <div className='lg:max-w-7xl px-5 flex flex-col gap-20'>
            <div className='flex flex-col gap-5 items-start'>
                <SecondaryHeading>
                    {project && (project.attributes.Title)}
                </SecondaryHeading>
                
                <Button href={project && (project.attributes.WebsiteLink)}>Visit Site</Button>
            </div>

            {/* About Project */}
            <div className='flex flex-col gap-5'>
                <h2 className='text-xl lg:text-2xl leading-normal lg:leading-relaxed font-medium'>About Project</h2>
                <p>
                    {project && (project.attributes.AboutProject)}
                </p>
            </div>

            {/* First Project Image */}
            <img className='rounded-xl lg:rounded-3xl' src={project && (project.attributes.Thumbnail2.data.attributes.formats.large.url)} alt="" />


            {/* Goals for Project */}
            <div className='flex flex-col gap-5'>
                <h2 className='text-xl lg:text-2xl leading-normal lg:leading-relaxed font-medium'>Project Goals</h2>
                <p>
                    {project && (project.attributes.ProjectGoals)}
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* Second Project Image */}
                <img className='rounded-xl lg:rounded-xl' src={project && (project.attributes.Thumbnail.data.attributes.formats.large.url)} alt="" />

                {/* Third Project Image */}
                <img className='rounded-xl lg:rounded-3\xl' src={project && (project.attributes.Thumbnail3.data.attributes.formats.large.url)} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Transition(ProjectPage)