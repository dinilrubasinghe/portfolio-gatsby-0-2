import React from 'react'
import Navbar from '../components/navbar/navbar'
import '../../static/sass/global.scss'
import 'animate.css'

export default function Layout({children}) {
  return (
    <div className='layout'>
      <Navbar/>

      <div className='content'>
        {children}
      </div>

    </div>
  )
}
