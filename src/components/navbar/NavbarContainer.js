import React from 'react'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import NavbarBottom from './NavbarBottom'
import "./NavbarContainer.css"

function NavbarContainer() {
  return (
    <div>
      <SubHeader />
      <Navbar />
      <NavbarBottom />
    </div>
  )
}

export default NavbarContainer