import React, { useState, useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = ()=>{
    menuRef.current.style.right = "0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>

      <ul ref = {menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li><AnchorLink className='anchor-link' href='#home' ><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")} >About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("contact")}>Projects</p></AnchorLink></li>

      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar