import React from 'react'
import './Navbar.css'
import navprofileIcon from '../Assets/PASS.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div><h3>UGN-Mart</h3>
        <p>Admin</p>
      </div>
      <img src={navprofileIcon} width='15px' height='50px' className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
