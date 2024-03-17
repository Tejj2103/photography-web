import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__first'>
        <div className='footer__first--logo' >
          <div class="header__logo-box">
            <div class="header__logo"><i style={{ fontSize: "3.2rem", color: "#000", fontFamily: "Dancing Script", lineHeight: 0 }}>Shubh Knots</i></div>
            <div><p style={{ fontSize: "1.2rem", color: "#000", fontFamily: "Poppins", letterSpacing: "3px", textTransform: 'uppercase' }}>the knot of love</p></div>
          </div>
        </div>
        <div className='footer__first--contact'>
          <h2 className='footer__first--contact-heading'>Connect with Us</h2>
          <div className='footer__first--contact-text'>
            <p>info@shubhknots.com</p>
            <p>jaipurwala@gmail.com</p>
            <p>+91-5356546342</p>
          </div>
        </div>
        <div className='footer__first--follow'>
          <h2 className='footer__first--follow-heading'>Follow Along</h2>
          <div className='footer__first--follow-icons'>
            <AiFillInstagram className='footer__first--follow-icons-icon' size={"2rem"} color={"#000"} />
            <FaFacebook className='footer__first--follow-icons-icon' size={"2rem"} color={"#000"} />
            <FaYoutube className='footer__first--follow-icons-icon' size={"2rem"} color={"#000"} />
          </div>
        </div>
      </div>
      <div className='footer__second'>
        <p>A professional photographer may be an employee, for example of a newspaper, or may contract to cover a particular planned event such as a wedding or graduation, or to illustrate an advertisement. Others, like fine art photographers, are freelancers, first making an image and then licensing or making printed copies of it for sale or display. </p>
      </div>
    </footer>
  )
}

export default Footer