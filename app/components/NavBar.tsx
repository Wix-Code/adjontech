import React from 'react';
import Link from 'next/link';
import { links } from '../dummyData';

const NavBar = () => {
  return (
    <div
      style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }}
      className="bg-white sticky top-0 z-50"
    >
      <div className="flex justify-between items-center h-[90px] max-w-[1000px] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/"><img className="w-[50px]" src="/pic/logo.jpg" alt="AbjonTech Logo" /></Link>
          <Link href="/"><p className="font-semibold text-[#222222] text-[22px]">AbjonTech</p></Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <div key={link.id}>
              <Link
                href={link.href}
                className="text-[#333] hover:text-[#000] transition font-medium"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;