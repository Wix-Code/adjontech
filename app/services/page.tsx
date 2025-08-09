'use client'

import React, { useEffect } from 'react'
import { services } from '../dummyData'
import Link from 'next/link'
import AOS from "aos"
import 'aos/dist/aos.css'

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: 'ease-in-out', // easing option
      once: true, // whether animation should happen only once
    })
  }, [])

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Hero-Image-Engineering-Services%3Arad-3x2?ts=1748570118663&fit=constrain&dpr=off")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="text-white py-[6rem] px-5 md:px-[4rem] mb-6"
      >
        <p className="text-[28px] md:text-[36px] py-2 border-y-[1px] border-[#ececec] w-fit font-semibold">Our Services</p>
      </div>

      <div className='max-w-[1000px] space-y-5 m-auto'>
        <div className='space-y-2 flex px-5 md:px-0 flex-col items-center justify-center text-center'>
          <p className='text-[18px] text-[#4e4e4e] font-[600]'>Power Up Your Business with Abjontech Solutions Limited</p>
          <p className='text-[14px] font-[500]'>At Abjontech, we don’t just supply systems — we deliver complete solutions. <br />
            Whether you're looking to boost productivity, strengthen security, or streamline operations, <br /> we’ve got you covered. Our offerings <span className='font-[600]'>include:</span>
          </p>
        </div>

        <div className='grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 gap-5'>
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation
              style={{ boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px" }}
              className='p-5 space-y-3'
            >
              <Link href={`/services/${service.id}`}>
                <img className='h-[250px] object-cover w-full' src={service.img} alt={service.name} />
              </Link>
              <Link className='pt-3 block' href={`/services/${service.id}`}>
                <p className='text-[16px] font-[600] capitalize'>{service.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page