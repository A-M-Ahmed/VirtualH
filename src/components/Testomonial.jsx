import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <div>
        <h3 className="my-4 text-center text-4xl md:text-5xl lg:text-6xl">
        What People are saying
      </h3>
      {/* //* Comments people */}
      <div className='py-11'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-7 '>
          {
            testimonials.map(testM => (
              <div key={testM.user} className='shadow-md border border-gray-800/50 rounded-md  p-6 pb-4 bg-[#171717] '>

                <p className='text-base tracking-wide my-4  text-white/70 mb-2'>{testM.text}</p>
                <div className='flex space-x-6 mt-3'>
                  {/* //* Image of the user */}
                  <div className='w-12 h-12 rounded-full border border-white/55'>

                  <img className='w-full h-full rounded-full object-cover' src={testM.image} alt={testM.user} />
                  </div>
                  {/* //* Content */}
                  <div>
              <h3>{testM.user}</h3>
              <p className='text-[#404040] font-medium'>{testM.company}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
