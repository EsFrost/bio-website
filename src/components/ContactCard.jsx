import React from 'react'
import './contactcard.css'

import { FaAddressBook, FaBriefcase, FaPhone, FaRegEnvelope } from 'react-icons/fa'

const ContactCard = () => {


    return(
        <>
        
            <div id='contact' className="container">
                <ul className="cards">
                    <li>
                        <img 
                            src="https://sigmafi-tech.website/my-portfolio/bio/src/img/profile.jpg"/>
                        <div className="details">
                            <span className="name"><FaAddressBook className='contact-fa' /> Sotirios NATSIOS (Sigmund Frost)</span>
                            <span className="title"><FaBriefcase className='contact-fa'/> Full Stack Web Developer</span>
                            <span className="phone"><FaPhone className='contact-fa'/> contact via email</span>
                            <span className="email"><FaRegEnvelope className='contact-fa'/> sigmafi.tech@gmail.com</span>
                        </div>
                    </li>
                </ul>
            </div>
        
        </>
    )
}

export default ContactCard