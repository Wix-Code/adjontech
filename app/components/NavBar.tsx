import React from 'react'
import { links } from '../dummyData'
import Link from 'next/link'


const NavBar = () => {
  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}} className='bg-white sticky top-0 z-50'>
      <div className='flex justify-between h-[100px] items-center max-w-[1000px] m-auto'>
        <div className='flex items-center gap-1'>
          <img className='w-[50px]' src="/pic/logo.jpg" alt="" />
          <p className='font-[600] text-[#222222] text-[24px]'>AbjonTech</p>
        </div>
        <div className='md:flex sm:hidden items-center gap-5'>
          {
            links.map((link) => {
              return (
                <div>
                  <Link key={link.id} href={link.href}>
                    {link.name}
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar