import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FaInstagram /> <FaFacebook /> <FaTwitter /> <FaLinkedin />   
        </div>
        <p> &copy; 2023 lekefastfood.com</p>

    </div>
  )
}

export default Footer