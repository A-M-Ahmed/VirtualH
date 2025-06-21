import React from 'react'
import { authenticationPage, communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
    <footer className=' py-12 px-6'>

        {/* //** div footer */}
        <div className=' border-t border-white/30 max-w-6xl mx-auto py-6'>

{/* //* inside of container */}
        <div className='flex  justify-between'>
            {/* //* Resources */}
            <div>
                <h3 className='my-3 text-base font-medium'>Resources</h3>
                {
                    resourcesLinks.map(rcs => (
                        <a key={rcs}
                         href={rcs.href}
                         className='block text-gray-500 hover:text-gray-100 duration-200 mb-2'
                         >{rcs.text}</a>
                    ))
                }
            </div>
            {/* //* PlatForm */}
            <div>
                <h3 className='my-3 text-base font-medium'>Platform</h3>
                {
                    platformLinks.map(rcs => (
                        <a key={rcs}
                         href={rcs.href}
                         className='block text-gray-500 hover:text-gray-100 duration-200 mb-2'
                         >{rcs.text}</a>
                    ))
                }
            </div>
            {/* //* community */}
            <div>
                <h3 className='my-3 text-base font-medium capitalize'>community</h3>
                {
                    communityLinks.map(rcs => (
                        <a key={rcs}
                         href={rcs.href}
                         className='block text-gray-500 hover:text-gray-100 duration-200 mb-2'
                         >{rcs.text}</a>
                    ))
                }
            </div>
            {/* //* authentication */}
            <div>
                <h3 className='my-3 text-base font-medium capitalize'>authentication</h3>
                {
                    authenticationPage.map(rcs => (
                        <a key={rcs}
                         href={rcs.href}
                         className='block text-gray-500 hover:text-gray-100 duration-200 mb-2'
                         >{rcs.text}</a>
                    ))
                }
            </div>
        </div>

        </div>
      
    </footer>
  )
}

export default Footer
