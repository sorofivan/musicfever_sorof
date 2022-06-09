import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container bg-dark border border-dark border-2 py-3 mt-3'>
        <p className='m-1 text-light'>&copy; {new Date().getFullYear()} Music Fever | All rights reserved</p>
        <p className='m-1 text-light'>Developed by Ivan Sorof</p>
    </div>
  )
}

export default Footer
