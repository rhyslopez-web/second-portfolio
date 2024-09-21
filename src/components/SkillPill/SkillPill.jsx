import React from 'react'

const SkillPill = ({label}) => {
  return (
    <div className='rounded-full px-5 py-2 border-black border border-dashed dark:border-neutral-200'>
        {label}
    </div>
  )
}

export default SkillPill