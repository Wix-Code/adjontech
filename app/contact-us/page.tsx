import { url } from 'inspector'
import { Linkedin, MapPin } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Hero-Image-Engineering-Services%3Arad-3x2?ts=1748570118663&fit=constrain&dpr=off")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white', // so text shows well over the gradient
          paddingLeft: '4rem',
        }}
        className="py-[6rem] mb-6"
      >
        <p className='text-[30px] font-[600]'>Contact Us</p>
      </div>
      <div className='flex gap-5 max-w-[900px] m-auto'>
        <div className='flex-1 text-center items-center flex flex-col space-y-2'>
          <MapPin className='text-[#404df7]' />
          <p className='text-[#404df7] text-[16px] font-[600]'>Abjontech Solutions  Limited</p>
          <p className='text-[14px] font-[400]'>Plot 49, MCC Road, Ikenegbu Layout, Owerri, Imo State, Nigeria</p>
          <div>
            <a className='w-[40px] rounded-[50%] bg-blue-500 justify-center items-center flex text-white h-[40px]' href="http://">
              <Linkedin className='w-[18px]' />
            </a>
          </div>
        </div>
        <div className='flex-1 space-y-4'>
          <div>
            <label className='text-[14px] font-[400]' htmlFor="">Full Name</label>
            <input className='w-full px-4 outline-none border-[#ececec] border-[1px] py-3' type="text" />
          </div>
          <div>
            <label className='text-[14px] font-[400]' htmlFor="">Email</label>
            <input className='w-full px-4 outline-none border-[#ececec] border-[1px] py-3' type="text" />
          </div>
          <div>
            <label className='text-[14px] font-[400]' htmlFor="">Subject</label>
            <input className='w-full px-4 outline-none border-[#ececec] border-[1px] py-3' type="text" />
          </div>
          <div>
            <label className='text-[14px] font-[400]' htmlFor="">Message</label>
            <textarea className='w-full p-4 outline-none resize-none border-[#ececec] h-[200px] border-[1px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page