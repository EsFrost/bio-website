import React, { useEffect, useState, Fragment } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './skills.css'

const Skill = ({ barwidth }) => {

    const [value, setValue] = useState(0)
    const control = useAnimation()
    const [ref, inView] = useInView()
    
    const skillVariant = {
        visible: {width: value},
        hidden: {width: 0}
    }

    useEffect(() => {
        setValue(barwidth)
    }, [barwidth])

    useEffect(() => {
        inView ? control.start('visible') : control.start('hidden')
    }, [control, inView])

    return(
        <>
            <div className="bg-bar">
                <motion.div 
                    className="fg-bar"
                    ref={ref}
                    initial='hidden'
                    animate={control}
                    variants={skillVariant}
                >
                </motion.div>
            </div>
        </>
    )
}

const skillList = [
    {name: 'HTML', skill: '80%'},
    {name: 'CSS', skill: '70%'},
    {name: 'JavaSript', skill: '90%'},
    {name: 'React', skill: '75%'},
    {name: 'Node.js', skill: '60%'},
    {name: 'Express', skill: '60%'},
    {name: 'PHP', skill: '75%'},
    {name: 'Wordpress', skill: '85%'},
    {name: 'SQL', skill: '60%'},
    {name: 'MySQL', skill: '80%'}
]

const Skills = () => {

    return(
        <>
            <div id='skills' className="skills-container">
                <h1 className='skills-heading'>SKILLS</h1>
                <div className="skill-wrapper">
                    {skillList.map(item => {
                        return (
                            <Fragment key={item.name}><div className='skill-name'>{item.name}</div><Skill barwidth={item.skill} /></Fragment>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills