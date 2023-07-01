import React, { useState } from 'react'
import useOnclickOutside from "react-cool-onclickoutside"
import './navbar.css'
import { FaBars, FaTimes, FaReact, FaUserAlt, FaRegAddressCard, FaBriefcase, FaAddressBook, FaGithub } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false)

    const ref = useOnclickOutside(() => {
        if (isClicked) {
            setIsClicked(!isClicked)
        }
    })


    return (
        <>
            <nav className="navbar-items" id="test">
                <h1>SigmaFi <FaReact className='logo-icon' /></h1>
                <div ref={ref} className="menu-icons">
                    <FaBars className={!isClicked ? 'menu-icons' : 'hidden'} onClick={() => setIsClicked(!isClicked)} />
                    <FaTimes className={isClicked ? 'menu-icons' : 'hidden'} onClick={() => setIsClicked(!isClicked)} />
                </div>
                <ul className={isClicked ? 'active' : ''} ref={ref} >
                    <li key={uuidv4()}><a onClick={() => setIsClicked(!isClicked)} href="#bio" className='nav-links'><FaUserAlt className='nav-list-icons' />Bio</a></li>
                    <li key={uuidv4()}><a onClick={() => setIsClicked(!isClicked)} href="#skills" className='nav-links'><FaRegAddressCard className='nav-list-icons' />Skills</a></li>
                    <li key={uuidv4()}><a onClick={() => setIsClicked(!isClicked)} href="#contact" className='nav-links'><FaAddressBook className='nav-list-icons' />Contact</a></li>
                    <li key={uuidv4()}><a onClick={() => setIsClicked(!isClicked)} href="https://github.com/EsFrost/" target='_blank' className='nav-links'><FaGithub className='nav-list-icons' />Github</a></li>
                    <li key={uuidv4()}><a onClick={() => setIsClicked(!isClicked)} href="https://sigmafi-tech.website/my-portfolio/" target='_blank' className='nav-links'><FaBriefcase className='nav-list-icons' />Portfolio</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
