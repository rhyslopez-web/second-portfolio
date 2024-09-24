import React, { useEffect, useState } from 'react'
import Experience from '../Experience/Experience'

const ExperienceSection = () => {

    const URL = 'https://portfolio-strapi-cms-494nt.ondigitalocean.app/api/work-experiences'

    const [workExperience, setWorkExperience] = useState()

    useEffect(() => {
        const fetchWorkExperience = async () => {
            const res = await fetch(URL)
            const workExperience = await res.json()
            setWorkExperience(workExperience.data)
        }

        fetchWorkExperience()
    }, [])


  return (
    <div id='experience-section' className='mb-28 px-5 dark:text-neutral-200'>
        <h2 className='w-full text-3xl'>Work Experience</h2>

        <div className='flex flex-col'>
            {workExperience && (
                workExperience.map((experience, index) => (
                    <Experience
                    startDate={experience.attributes.StartingDate}
                    endDate={experience.attributes.EndDate}
                    key={index}
                    title={experience.attributes.Title}
                    company={experience.attributes.Company}
                    description={experience.attributes.Description}
                    />
                ))
            )}
        </div>
    </div>
  )
}

export default ExperienceSection