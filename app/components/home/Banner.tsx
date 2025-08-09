"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css'

const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: 'ease-in-out', // easing option
      once: true, // whether animation should happen only once
    })
  }, [])

  return (
    <div className="px-4 py-8">
      <div className="text-center max-w-[750px] mx-auto space-y-4">
        <p data-aos-delay="500" data-aos="fade-up" className="text-[20px] md:text-[24px] font-semibold text-black leading-snug">
          Optimized IT solutions supercharge your productivity and growth, and our services make it easy to take full advantage
        </p>
        <p  data-aos="fade-up" data-aos-delay="500" className="text-[14px] md:text-[16px] text-[#575757] leading-relaxed">
          Contact Abjontech Solutions Limited for a FREE consultation and we’ll show you what award-winning Managed IT Services can do for your business
        </p>
        <Link
          data-aos="fade-up"
          data-aos-delay="500"
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-[#333] transition"
        >
          Contact us today
        </Link>
      </div>
    </div>
  );
};

export default Banner;