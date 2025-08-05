import { logos } from '@/app/dummyData'
import React from 'react'

const Partners = () => {
  return (
    <div className='py-2 bg-[#fcfcfc8f]'>
      <div className='max-w-[1000px] sm:flex-col md:flex m-auto items-center gap-5'>
        <div className='flex-1'>
          <img className='h-[400px] w-full object-cover' src="https://images.ctfassets.net/7qqwgjna58ct/3n1L55PK6Xj2i6hYZWQc4C/5d003d6f666202796ede2745c3d21836/Flexible_working_in_education_blog_square_image.jpg" alt="" />
        </div>
        <div className='flex-1'>
          <p className='text-[20px] text-[#4e4e4e] font-[600]'>TechSolutions collaborates with hardware and software leaders to provide enterprise-class solutions for small and mid-sized businesses</p>
          <div className='grid grid-cols-3'>
            {
              logos.map((logo) => {
                return (
                  <div key={logo.id}>
                    <img className='w-[100px]' src={logo.pic} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners