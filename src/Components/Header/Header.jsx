import React, { useState } from 'react'
import './header.css';

const Header = () => {

    /*===================Change Background Header===================== */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");

    })
    const[Toggle, showMenu] = useState(false);
    const[activeNavbar,setActiveNavbar] = useState("#home")
  return (
    <div>
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>Portfolio</a>

                <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href='#home' onClick={() => setActiveNavbar("#home")} className={activeNavbar === '#home' ? "nav__link active link" : "nav__link"}>
                                <i className='uil uil-estate nav_icon'></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' onClick={() => setActiveNavbar("#about")} className={activeNavbar === '#about' ? "nav__link active link" : "nav__link"}>
                                <i className='uil uil-user nav_icon'></i> About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' onClick={() => setActiveNavbar("#skills")} className={activeNavbar === '#skills' ? "nav__link active link" : "nav__link"}>
                                <i className='uil uil-file-alt nav_icon'></i> Skills
                            </a>
                        </li>
                        
                        <li className='nav__item'>
                            <a href='#portfolio' onClick={() => setActiveNavbar("#portfolio")} className={activeNavbar === '#portfolio' ? "nav__link active link" : "nav__link"}>
                                <i className='uil uil-scenery nav_icon'></i> Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact'onClick={() => setActiveNavbar("#contact")} className={activeNavbar === '#contact' ? "nav__link active link" : "nav__link"}>
                                <i className='uil uil-message nav_icon'></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times  nav__close" onClick={()=> showMenu(!Toggle)}></i>
                </div>

                <div className='nav__toggle' onClick={()=> showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header