import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
      <h3 className='font-semibold'>Trusted By Leading Companies</h3>
      <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
        {company_logos.map((logoObj, index) => (
          <img
            key={index}
            src={logoObj.src || logoObj} // if using objects, else just logoObj
            alt={logoObj.alt || `Company logo ${index + 1}`} 
            className='max-h-5 sm:max-h-6 w-auto transition-transform duration-300 hover:scale-110 dark:drop-shadow-xl'
          />
        ))}
      </div>
    </div>
  )
}

export default TrustedBy
