import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNav } from "../Components/MainNav"

export const MainLayout = () => {
  return (
    <>
      <h1 className='logo'>React router v6 test</h1>
      <div className='main-layout'>
      <MainNav />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>

  )
}
