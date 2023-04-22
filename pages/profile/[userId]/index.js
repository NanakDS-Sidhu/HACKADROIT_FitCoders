import React from 'react'
import Sidebar from "../../../components/Sidebar"
import Navbar from "../../../components/Navbar"
const index = () => {
  return (
    <>
     <Navbar/>
     <div className='flex'>
     <Sidebar/>
      Hello world
     </div>
    </>
  )
}

export default index
