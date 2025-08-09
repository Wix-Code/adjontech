import Link from 'next/link';
import React from 'react';

const HeroPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(173, 216, 230, 0.0), rgba(0, 0, 0, 0.90)), url("https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Hero-Image-Engineering-Services%3Arad-3x2?ts=1748570118663&fit=constrain&dpr=off")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="text-white px-4 py-[6rem] md:py-[8rem] md:px-[4rem] space-y-4 mb-6"
      >
        <p className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold leading-tight">
          Award-Winning Managed <br className="hidden sm:block" />
          IT Support
        </p>

        <p className="text-[#d2e3f5] text-[16px] sm:text-[18px] font-medium leading-relaxed">
          Abjontech Solutions Limited is effective, reliable, and easy to work with. <br className="hidden sm:block" />
          Schedule a free consultation and we’ll show you why we were <br className="hidden sm:block" />
          named one of the top IT firms in Nigeria.
        </p>

        <Link href="/contact-us" className="bg-white text-black font-semibold px-6 py-3 rounded-md w-fit hover:bg-gray-100 transition">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;