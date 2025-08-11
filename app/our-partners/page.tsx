'use client'

import React, { useEffect } from 'react'
import { logos, services } from '../dummyData'
import Link from 'next/link'
import AOS from "aos"
import 'aos/dist/aos.css'

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration
      easing: 'ease-in-out', // easing option
      once: true, // whether animation should happen only once
    })
  }, [])

  return (
    <div className='mb-10'>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Hero-Image-Engineering-Services%3Arad-3x2?ts=1748570118663&fit=constrain&dpr=off")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="text-white py-[6rem] px-5 md:px-[4rem] mb-6"
      >
        <p className="text-[28px] md:text-[36px] py-2 border-y-[1px] border-[#ececec] w-fit font-semibold">Our Partners</p>
      </div>

      <div className='max-w-[1000px] space-y-5 m-auto'>
        <p data-aos="fade-up" className="text-[18px] text-center text-[#4e4e4e] font-semibold mb-4">
          Abjontech Solutions Limited collaborates with hardware and software leaders to provide enterprise-class solutions for small and mid-sized businesses
        </p>

        <div className='grid grid-cols-1 px-5 md:px-0 md:grid-cols-4 gap-5'>
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation
              style={{ boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px" }}
              className='p-5 flex justify-center items-center space-y-3'
            >
              <img src={logo.pic} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page