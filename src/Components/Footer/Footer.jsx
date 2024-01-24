import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Portfolio</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href='https://www.instagram.com/theycallmejack._/' className='footer__social-link' target='_blank'><i class="bx bxl-instagram"></i></a>

                    <a href='https://www.linkedin.com/in/aamir-shaikh-481739204/' className='footer__social-link' target='_blank'><i class="bx bxl-linkedin"></i></a>

                    <a href='https://github.com/Aamir-nshaikh' className='footer__social-link' target='_blank'><i class="uil uil-github-alt"></i></a>
                </div>

                <span className='footer__copy'>&#169; All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer