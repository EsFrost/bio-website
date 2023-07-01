import React from 'react'
import { FaBriefcase, FaBook, FaBrain } from 'react-icons/fa'
import './bio.css'

const Bio = () => {

    return(
        <>
            <div id="bio" className='bio-container'>
                <h1 className='bio-heading'>ABOUT ME</h1>
                <div className='bio-content'>

                    Hello, my name is Sotirios NATSIOS (aka Sigmund Frost / SigmaFi) born on May 20th 1993,
                    I'm a full stack web developer from Greece. Computers have always been my passion. I started
                    learning coding / programming in 2013
                    and never stoppped since. Currently I'm expanding my programming knowledge with Javascript, React and
                    Node.js. I have previously worked with html, css, php, sql and wordpress projects. Feel free to check
                    my resume and some of my projects.

                </div>

                <div className='bio-list-items'><FaBriefcase className='fa-items' />Work Experience</div>

                <div id='dates-row-one' className='bio-dates'>June 2017 - Current</div>
                <div id='work-row-one' className='bio-work-col'>
                    <div className="work-title">Web Developer</div>
                    <div className="work-name">Freelance</div>
                    <div className="word-desc">Intependent work and projects for various clients</div>
                </div>

                <div id='dates-row-two' className='bio-dates'>August 2022 - March 2023</div>
                <div id='work-row-two' className='bio-work-col'>
                    <div className="work-title">Storekeeper</div>
                    <div className="work-name">Petsquare | Thessaloniki</div>
                    <div className="word-desc">Organized products, worked at sales department, built and maintained the store's eshop</div>
                </div>

                <div id='dates-row-three' className='bio-dates'>May 2018 - May 2022</div>
                <div id='work-row-three' className='bio-work-col'>
                    <div className="work-title">Secretary</div>
                    <div className="work-name">Tasos - Akis Driving School | Oraiokasrto</div>
                    <div className="word-desc">Handled record keeping, all school's transactions and managed the work schedule</div>
                </div>

                <div id='dates-row-four' className='bio-dates'>July 2017 - August 2017</div>
                <div id='work-row-four' className='bio-work-col'>
                    <div className="work-title">Warehouseman</div>
                    <div className="work-name">Stasi | Thessaloniki</div>
                    <div className="word-desc">Organized and distributed products to other departments of the business</div>
                </div>

                <div id='dates-row-five' className='bio-dates'>October 2016 - June 2017</div>
                <div id='work-row-five' className='bio-work-col'>
                    <div className="work-title">Web Developer</div>
                    <div className="work-name">Exnet Hellas | Thessaloniki</div>
                    <div className="word-desc">Developed and maintained web site for business' clients</div>
                </div>

                <div className="education bio-list-items"><FaBook className='fa-items' />Education</div>

                <div id='edu-date-one' className='bio-dates'>September 2013 - June 2015</div>
                <div id='edu-school-one' className='bio-work-col'>
                    <div className="work-title">IT Technician</div>
                    <div className="work-name">I.E.K. Vocational Training Institute NEAPOLIS THESSALONIKIS</div>
                </div>

                <div id='edu-date-two' className='bio-dates'>September 2011 - July 2013</div>
                <div id='edu-school-two' className='bio-work-col'>
                    <div className="work-title">Agricultural Technicialn</div>
                    <div className="work-name">A.T.E.I.Th. - Technological Educational Foundation of Thessaloniki</div>
                </div>

                <div id='edu-date-three' className='bio-dates'>September 2011 - July 2013</div>
                <div id='edu-school-three' className='bio-work-col'>
                    <div className="work-title">Highschool Diploma</div>
                    <div className="work-name">1st High School of Oraiokastro</div>
                    <div className="word-desc">General grade: 16.6</div>
                </div>

                <div className="misc-skills bio-list-items"><FaBrain className='fa-items' />Interests and other skills</div>

                <div id='lang-one' className='bio-work-col'>
                    <div className="work-title">English</div>
                    <div className="work-name">B2 - Cambridge & Michigan</div>
                </div>

                <div id='lang-two' className='bio-work-col'>
                    <div className="work-title">French</div>
                    <div className="work-name">A2 - Delf</div>
                </div>

                <div id='lang-three' className='bio-work-col'>
                    <div className="work-title">Swedish</div>
                    <div className="work-name">A2 - Self assessment</div>
                </div>

                <div id='music-one' className='bio-work-col'>
                    <div className="work-title">Music Theory and Harmony</div>
                    <div className="work-name">Degree in music theory</div>
                </div>

                <div id='music-two' className='bio-work-col'>
                    <div className="work-title">Piano</div>
                    <div className="work-name">Classical education</div>
                </div>

                <div id='photo' className='bio-work-col'>
                    <div className="work-title">Photography</div>
                    <div className="work-name">Amateur photographer</div>
                    <div className="word-desc">DSRL and Adobe Photoshop Knowledge</div>
                </div>

                <div id='tech' className='bio-work-col'>
                    <div className="work-title">Computer Enthusiast</div>
                    <div className="work-name">Interest in hardware and gadgets</div>
                </div>

            </div>
        </>
    )
}

export default Bio