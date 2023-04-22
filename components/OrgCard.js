import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const OrgCard = (props) => {
  console.log(props)
  const router = useRouter()
  
  return (
    <>
      <figure class="flex flex-col  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{props.data.Title}</h3>
            <p class="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <a href={`/profile/${props.data.id}/dashpost`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See Posts !
            
        </a>
        <figcaption class="flex items-center justify-center space-x-3">
            
            
        </figcaption>    
    </figure>
    </>
  )
}

export default OrgCard
