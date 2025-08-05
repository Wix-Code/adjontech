import { logos } from '@/app/dummyData'
import React from 'react'

const Partner = () => {
  return (
    <div className="py-2 bg-[#fcfcfc8f]">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row-reverse items-center gap-5 px-4 md:px-5">
        
        <div className="flex-1 w-full">
          <img
            className="w-full h-auto max-h-[400px] object-cover rounded"
            src="https://www.reed.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7qqwgjna58ct%2F40vnlS6aEocI5rhIzPEyEb%2Fe2a112a37220aac7a71633bbce3dde39%2F1461604091_mobile_hero_image.jpg&w=3840&q=75"
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

export default Partner