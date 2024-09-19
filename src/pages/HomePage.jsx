import React, { useEffect, useState } from 'react'
import MainHeading from '../components/MainHeading/MainHeading'
import Button from '../components/Button/Button'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection/ExperienceSection'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-20 items-center lg:max-w-7xl'>
        {/* Hero Section */}
        <div className='flex flex-col lg:gap-10 gap-5 items-start p-5'>
            <h3 className='text-2xl text-neutral-500'>
                Hello! I'm Rhys.
            </h3>            
            <MainHeading className={''}>
                A Creative Web Developer and Designer Transforming Ideas Into Captivating Online Experiences
            </MainHeading>
            <Button>Hire Me</Button>
        </div>

        <ProjectsSection/>
        <ExperienceSection/>
    </div>
  )
}

export default HomePage