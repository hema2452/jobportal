import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background">
        <main className='min-h-screen container text-white'>
            <Header/>
            <Outlet/>
        </main>
        <footer className='text-white bg-amber-600'>
          Hired Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, exercitationem!
        </footer>
    
      </div>
       
    </div>
  )
}

export default AppLayout