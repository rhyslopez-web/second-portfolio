import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'

const AboutSection = () => {
  return (
    <div className='px-5 mb-28 text-[#121212] dark:text-neutral-200 flex flex-col gap-10 rounded-3xl'>
        <SecondaryHeading>About Me</SecondaryHeading>

        <div className='grid grid-cols-1 lg:grid-cols-1 gap-10'>            
            <div className='flex flex-col gap-5'>
                <h2 className='w-full text-2xl lg:text-3xl'>Work & Education</h2>
                <p className=''>
                I graduated with honors from the Web Development and Design program at VanArts in 2023 and 
                have since continued to self-teach, including skills like React and Tailwind. 
                Alongside internships and work experience in tech, I've been a freelance music producer 
                for over 7 years and have worked part-time in retail for more than 3 years.
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <h2 className='w-full text-2xl lg:text-3xl'>Interests</h2>
                <p className=''>
                In my free time, I love making music, working on my clothing brand, or coding my next 
                project at a cozy café. When I’m not working on personal projects, 
                I enjoy spending quality time with friends and family, recharging and staying inspired.
                </p>
            </div>
        </div>

    </div>
  )
}

export default AboutSection