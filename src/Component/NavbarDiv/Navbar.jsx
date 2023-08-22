import React, {useState, useEffect} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setNavbarBg(true)
    } else {
      setNavbarBg(false)
    }
  }

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  const navbarClasses = `navbar flex justify-between items-center p-[3rem] fixed top-0 left-0 right-0 ${navbarBg ? 'z-10 bg-white shadow-md' : ''} ${mobileNav ? 'z-10 bg-white shadow-md' : ''}}`
  const navbarTransition = {
    transition: 'background 0.1s ease-in-out, box-shadow 0.1s ease-in-out'
  }
    
  return (
    <div className={navbarClasses} style={navbarTransition}>
      <div className="logo-div ml-6">
        <h1 className='logo text-[25px] text-blueColor z'><strong>Job</strong>Search</h1>
      </div>
      <div className="menu flex fixed right-0 gap-8 mr-10 md:flex md:mr-0 md:gap-0">
        <button onClick={toggleMobileNav} className={`md:hidden menu-list text-[#6f6f6f] hover:text-blueColor ${mobileNav ? 'hidden' : 'flex'}`}>
          <GiHamburgerMenu className='text-[25px]'/>
        </button>
      </div>
      <div className={`menu md:flex md:gap-8 md:mr-6 ${mobileNav ? 'block text-right' : 'hidden'}`}>
        <button className='menu-list text-[#6f6f6f] hover:text-blueColor md:hidden'>
          <AiFillCloseCircle className='text-[25px]' onClick={toggleMobileNav}/>
        </button>
        <br />
        <li className='menu-list text-[#6f6f6f] hover:text-blueColor max-md:mt-2'>Jobs</li>
        <li className='menu-list text-[#6f6f6f] hover:text-blueColor max-md:mt-2'>Companies</li>
        <li className='menu-list text-[#6f6f6f] hover:text-blueColor max-md:mt-2'>About</li>
        <li className='menu-list text-[#6f6f6f] hover:text-blueColor max-md:mt-2'>Contact</li>
        <li className='menu-list text-[#6f6f6f] hover:text-blueColor max-md:mt-2'>Blog</li>
        <li className='menu-list text-[#6f6f6f] hover:text-blueColor max-md:mt-2'>Login</li>
        <li className='menu-list text-[#6f6f6f] hover:text-blueColor max-md:mt-2'>Register</li>
      </div>
    </div>
  )
}

export default Navbar