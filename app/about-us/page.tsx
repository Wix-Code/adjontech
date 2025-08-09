import React from 'react'

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Hero-Image-Engineering-Services%3Arad-3x2?ts=1748570118663&fit=constrain&dpr=off")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="text-white py-[6rem] px-5 md:px-[4rem] mb-10"
      >
        <p className="text-[28px] md:text-[36px] py-2 border-y-[1px] border-[#ececec] w-fit font-semibold">About Us</p>
      </div>
      <div className='md:max-w-[1000px] px-5 space-y-3 m-auto'>
        <p data-aos="fade-up"
            data-aos-delay="800" className="text-2xl font-bold capitalize">Power Up Your Business with Abjontech Solutions Limited!</p>
        <p className="text-[14px] text-[#4e4e4e]">At Abjontech Solutions Limited, we believe technology should work for you — not the other way around.</p>
        <p data-aos="fade-up"
          data-aos-delay="800" className="text-[14px] text-[#4e4e4e]">From world-class engineering solutions to cutting-edge educational software, secure networks, robust data protection, advanced ERP systems, and reliable data recovery — we don’t just sell products; we deliver complete solutions that transform the way you work.</p>
        <p data-aos="fade-up"
          data-aos-delay="800" className="text-[14px] text-[#4e4e4e]">Our mission is simple: help businesses, schools, and organizations scale faster, operate smarter, and achieve more. Whether you’re a small business owner looking for productivity tools, a school seeking interactive learning platforms, or a corporate enterprise in need of enterprise-grade IT infrastructure — we’ve got you covered.</p>
      </div>
      <div className='md:max-w-[1000px] mt-10 px-5 space-y-3 m-auto'>
        <p data-aos="fade-up"
          data-aos-delay="800" className="text-2xl font-bold capitalize">Why Choose Abjontech?</p>
        <div data-aos="fade-up"
          data-aos-delay="800" className='space-x-1'><span className="text-[14px] font-[600] text-[#000000]">End-to-End Solutions:</span><p className="text-[14px] text-[#4e4e4e]">We handle everything from consultation to supply, installation, training, and ongoing support.</p>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="800" className='space-x-1'><span className="text-[14px] font-[600] text-[#000000]">Global-Standard Tools:</span><p className="text-[14px] text-[#4e4e4e]">We only provide genuine, licensed products from trusted brands like Adobe, Microsoft, Solidworks, AutoDesk, CorelDRAW, HP, Dell, and more.</p>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="800" className='space-x-1'><span className="text-[14px] font-[600] text-[#000000]"> Custom-Fit Technology:</span><p className="text-[14px] text-[#4e4e4e]">Our solutions are tailored to your business needs — not just generic, one-size-fits-all packages.</p>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="800" className='space-x-1'><span className="text-[14px] font-[600] text-[#000000]">Proven Expertise:</span><p className="text-[14px] text-[#4e4e4e]">With years of experience serving businesses, schools, and organizations, we bring a wealth of industry knowledge to every project</p>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="800" className='space-x-1'><span className="text-[14px] font-[600] text-[#000000]"> Local Presence, Global Standards:</span><p className="text-[14px] text-[#4e4e4e]">Based in Owerri, Imo State, Nigeria, we combine on-ground support with world-class solutions.</p>
        </div>
      </div>
    </div>
  )
}

export default page