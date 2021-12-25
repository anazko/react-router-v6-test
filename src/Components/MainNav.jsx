import React from 'react'
import { NavLink } from 'react-router-dom'

export const MainNav = () => {
  return (
    <nav>
      <NavLink className='nav-link' to="/">Home</NavLink>
      <NavLink className='nav-link' to="/blog">Blog</NavLink>
    </nav>
  )
}
