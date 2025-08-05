import React from 'react'
import { services } from '../dummyData'

const page = () => {
  return (
    <div className='max-w-[1000px] m-auto'>
      <div className='grid grid-cols-3 gap-3'>
        {
          services.map((service) => {
            return (
              <div key={service.id}>
                <img src={service.img} alt="" />
                <p>{service.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default page