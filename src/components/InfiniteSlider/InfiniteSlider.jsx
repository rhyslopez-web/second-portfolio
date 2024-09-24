import { div } from 'framer-motion/client'
import { useContext, useEffect, useState } from 'react'
import Slider from 'react-infinite-logo-slider'
import { DarkModeContext } from '../../context/DarkModeContext'



const InfiniteSlider = () => {

  const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext)
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
      <div className='w-full overflow-hidden mt-10'>
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={isDarkMode ? '#121212' : '#f1f1f1'}
        >
          {stacks && (
            stacks.map((stack, index) => (
              <Slider.Slide key={index}>
                <SliderLogo  src={stack.attributes.Icon.data[0].attributes.url}/>
              </Slider.Slide>
            )) 
          )}
        </Slider>
      </div>
    )
}              
                     
export default InfiniteSlider

export const SliderLogo = ({src}) => {
  return(
    <div className='lg:h-24 lg:w-24 w-20 p-2 h-20 rounded-xl lg:rounded-3xl bg-neutral-200 dark:bg-neutral-800 lg:p-5 flex justify-center items-center'>
      <img src={src} alt="" className='w-5/6' />
    </div>
  )
}