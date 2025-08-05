import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="px-4 py-8">
      <div className="text-center max-w-[750px] mx-auto space-y-4">
        <p className="text-[20px] md:text-[24px] font-semibold text-black leading-snug">
          Optimized IT solutions supercharge your productivity and growth, and our services make it easy to take full advantage
        </p>
        <p className="text-[14px] md:text-[16px] text-[#575757] leading-relaxed">
          Contact TechSolutions for a FREE consultation and we’ll show you what award-winning Managed IT Services can do for your business
        </p>
        <Link
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