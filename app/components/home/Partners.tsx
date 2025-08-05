import { logos } from '@/app/dummyData'
import React from 'react'

const Partners = () => {
  return (
    <div className="py-2 bg-[#fcfcfc8f]">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5 px-4 md:px-5">
        
        <div className="flex-1 w-full">
          <img
            className="w-full h-auto max-h-[400px] object-cover rounded"
            src="https://images.ctfassets.net/7qqwgjna58ct/3n1L55PK6Xj2i6hYZWQc4C/5d003d6f666202796ede2745c3d21836/Flexible_working_in_education_blog_square_image.jpg"
            alt=""
          />
        </div>

        <div className="flex-1">
          <p className="text-[18px] text-center text-[#4e4e4e] font-semibold mb-4">
            TechSolutions collaborates with hardware and software leaders to provide enterprise-class solutions for small and mid-sized businesses
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {logos.map((logo) => (
              <div key={logo.id} className="flex justify-center">
                <img className="w-[80px] sm:w-[100px]" src={logo.pic} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Partners