import React, { useState, useEffect } from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import { SliderLogo } from '../InfiniteSlider/InfiniteSlider'

const AboutSection = () => {

  const [stacks, setStacks] = useState()

  useEffect(() => {
    const fetchStacks = async () => {
      const res = await fetch('https://portfolio-strapi-cms-494nt.ondigitalocean.app/api/stacks?populate=*')
      const stacks = await res.json()
      setStacks(stacks.data)
    }

    fetchStacks()
  }, [])

  return (
    <div id='about-section' className='mb-28 text-[#121212] dark:text-neutral-200 flex flex-col gap-10 lg:rounded-3xl bg-neutral-200 dark:bg-neutral-900 px-5 py-10 lg:p-10'>
        <h2 className='w-full text-3xl'>About Me</h2>

        <div className='grid grid-cols-1 lg:grid-cols-1 gap-10'>            
            <div className='flex flex-col gap-5'>
                <h2 className='text-3xl lg:text-4xl'>Work & Education</h2>
                <p className=''>
                I graduated with honors from the Web Development and Design program at VanArts in 2023 and 
                have since continued to self-teach, including skills like React and Tailwind. 
                Alongside internships and work experience in tech, I've been a freelance music producer 
                for over 7 years and have worked part-time in retail for more than 3 years.
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <h2 className='text-3xl lg:text-4xl'>Interests</h2>
                <p className=''>
                In my free time, I love making music, working on my clothing brand, or coding my next 
                project at a cozy café. When I’m not working on personal projects, 
                I enjoy spending quality time with friends and family, recharging and staying inspired.
                </p>
            </div>

            <div className='flex flex-col gap-10'>
                <h2 className='text-3xl lg:text-4xl'>My Stack</h2>
                <div className='grid lg:grid-cols-5 grid-cols-2 gap-5'>
                  {stacks && (
                    stacks.map((stack, index) => (
                      <div key={index} className='flex items-center gap-5 bg-neutral-300 dark:bg-neutral-800 rounded-lg p-3'>
                        <div className='h-14 w-14 flex justify-center items-center'>
                          <img className='w-4/6' src={stack.attributes.Icon.data[0].attributes.url} alt="" />
                        </div>
                        <span>{stacks && (stack.attributes.Title)}</span>
                      </div>
                    )) 
                  )}
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutSection