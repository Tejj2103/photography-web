import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
    const isActive = true;
    return (
        <header className='navigation'>
            <div class="navigation__logo-box">
                <div class="navigation__logo"><a href='/' style={{ textDecoration: "none", fontSize: "32px", color: "#000", fontFamily: "Dancing Script", lineHeight: 0 }}>Shubh Knots</a></div>
                <div><p style={{ fontSize: "12px", color: "#000", fontFamily: "Poppins", letterSpacing: "3px", textTransform: 'uppercase' }}>the knot of love</p></div>
            </div>
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="/" class="navigation__link">Home</a></li>
                    <li class="navigation__item"><a href="/films" class="navigation__link">Films</a></li>
                    <li class="navigation__item"><a href="/testimonials" class="navigation__link"><spa>Testimonials</spa></a></li>
                    <li class="navigation__item"><a href="/photography" class="navigation__link">Photography</a></li>
                    <li class="navigation__item"><a href="#about" class="navigation__link">About us</a></li>
                    <li class="navigation__item"><a href="#enquiry" class="navigation__link">Enquiry</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header