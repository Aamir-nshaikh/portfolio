import React from 'react'
import HtmlLogo from '../../assets/HTML.jpg'
import CssLogo from '../../assets/CSS.png'
import JSLogo from '../../assets/javalogo.jpg'
import ReactLogo from '../../assets/REACTLOGO.png'
import MYSQLLogo from '../../assets/MySQL-Logo.png'
import CLogo from '../../assets/C_Logo.png'

const SkillsBox = () => {
    return (
        <div className='skills_info grid'>
            <div className='skills__box'>
                <img src={HtmlLogo} alt='' />
                <h3 className='skills__title'>HTML</h3>
                <span className='skills__subtitle'>Basics</span>
            </div>
            <div className='skills__box'>
                <img src={CssLogo} alt='' />
                <h3 className='skills__title'>CSS</h3>
                <span className='skills__subtitle'>Moderate</span>
            </div>
            <div className='skills__box'>
                <img src={JSLogo} alt='' />
                <h3 className='skills__title'>JavaScript</h3>
                <span className='skills__subtitle'>Moderate</span>
            </div>
            <div className='skills__box'>
                <img src={ReactLogo} alt='' />
                <h3 className='skills__title'>ReacT JS</h3>
                <span className='skills__subtitle'>Moderate</span>
            </div>
            <div className='skills__box'>
                <img src={MYSQLLogo} alt='' />
                <h3 className='skills__title'>My SQL</h3>
                <span className='skills__subtitle'>Moderate</span>
            </div>
            <div className='skills__box'>
                <img src={CLogo} alt='' />
                <h3 className='skills__title'>C Programming</h3>
                <span className='skills__subtitle'>Moderate</span>
            </div>
        </div>
    )
}

export default SkillsBox