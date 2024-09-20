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

    console.log(workExperience)

  return (
    <div className='mb-28'>
        <h2 className='w-full px-5 text-3xl mb-5'>Work Experience</h2>

        <div className='flex flex-col gap-16 p-5'>
            {workExperience && (
                workExperience.map((experience, index) => (
                    <Experience
                    startDate={experience.attributes.StartingDate}
                    endDate={experience.attributes.EndDate}
                    key={index}
                    title={experience.attributes.Title}
                    description={experience.attributes.Description}
                    />
                ))
            )}
        </div>
    </div>
  )
}

export default ExperienceSection