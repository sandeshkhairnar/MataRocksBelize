import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Comingsoon() {
  return (
    <div className='coming-soon'>
          <div className="content-header">
        <div className="header-overlay"></div>
        <StaticImage
          alt="Coming header"
          src="../../../images/comingHeader.png"
          quality={60}
          formats={["auto", "webp", "avif"]}
        />
        <div className="header-cont">
          <h1>Coming Soon</h1>
        </div>
      </div>
      <div className='main-cont'>
         <h1>Under Construction</h1>
         <p>We are working hard to bring you something amazing. Stay Tuned!</p>
          <p>Visit our Flagship Hotel while we are back!</p>
          <a href="https://barefoothotelbelize.com/" target="_blank" rel="noreferrer">
                         <StaticImage alt="barefoot logo" src="../../../images/Barefoot-Logo12-white-bze.png" />
          </a>
      </div>
      
    </div>
  )
}

export default Comingsoon
