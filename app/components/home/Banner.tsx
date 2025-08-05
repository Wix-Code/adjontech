import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className='text-center max-w-[750px] space-y-3 m-auto'>
        <p className='text-[24px] font-[600]'>Optimized IT solutions supercharge your productivity and growth, and our services make it easy to take full advantage</p>
        <p className='text-[16px] text-[#575757]'>Contact TechSolutions for a FREE consultation and we’ll show you what award-winning Managed IT Services can do for your business</p>
        <Link className='bg-[#000000] px-3 py-2 text-[#FFFFFF]' href="/contact">
          Contact us today
        </Link>
      </div>
    </div>
  )
}

export default Banner