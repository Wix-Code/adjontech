import React from 'react'

const HeroPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(173, 216, 230, 0.0), rgba(0, 0, 0, 0.90)), url("https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Hero-Image-Engineering-Services%3Arad-3x2?ts=1748570118663&fit=constrain&dpr=off")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white', // so text shows well over the gradient
          paddingLeft: '4rem',
        }}
        className="py-[10rem] space-y-3 mb-6"
      >
        <p className='text-[40px] text-[#ffffff] font-[800]'>Award-Winning Managed <br />IT Support</p>
        <p className='text-[#d2e3f5] font-[500] text-[18px]'>TechSolutions is effective, reliable, and easy to work with.<br /> Schedule a free consultation and we’ll show you  why we were <br /> named one of the top IT firms in North America
        </p>
        <p className=''>Contact Us</p>
      </div>
    </div>
  )
}

export default HeroPage