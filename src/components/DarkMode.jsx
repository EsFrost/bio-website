import React, { useState, useEffect } from 'react'
import './darkmode.css'

const DarkMode = () => {
    const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
    )
    const [isChecked, setChecked] = useState(localStorage.getItem('isChecked') || 'notChecked')

    const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark')
        setChecked('notChecked')
    } else {
        setTheme('light')
        setChecked('checked')
    }
    }

    useEffect(() => {
    localStorage.setItem('theme', theme)
    localStorage.setItem('isChecked', isChecked)
    document.body.className = theme
    document.getElementById('darkMode').className = isChecked
    }, [theme, isChecked])


    return (
    <>
        <div className = 'toggle-switch'>
            <label>
            <input id='darkMode' type = 'checkbox' className={isChecked} />
            <span className = 'slider' onClick={toggleTheme}></span>
            </label>
        </div>
    </>
    )    
}

export default DarkMode