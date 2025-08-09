"use client"

import { services } from '@/app/dummyData'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration
      easing: 'ease-in-out', // easing option
      once: true, // whether animation should happen only once
    })
  }, [])

  return (
    <div className='max-w-[1000px] my-5 space-y-5 m-auto'>
      <div data-aos="fade-up" className='space-y-2 flex px-5 md:px-0 flex-col items-center justify-center text-center'>
        <p data-aos="fade-up" className='md:text-[24px] text-[20px] text-center py-2 border-y-[1px] border-[#ececec] w-fit font-[600]'>Our Services</p>
        <p data-aos="fade-up" className='text-[18px] text-[#4e4e4e] font-[600]'>Power Up Your Business with Abjontech Solutions Limited</p>
        <p data-aos="fade-up" className='text-[14px] font-[500] text-['>At Abjontech, we don’t just supply systems — we deliver complete solutions. <br />
Whether you're looking to boost productivity, strengthen security, or streamline operations, <br /> we’ve got you covered. Our offerings <span className='font-[600]'>include:</span></p>
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
      <div className='flex items-center justify-center'>
        <Link
          data-aos="fade-up"
          href="/services"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-[#333] transition"
        >
          See more
        </Link>
      </div>
    </div>
  )
}

export default Services