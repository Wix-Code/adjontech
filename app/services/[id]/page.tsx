'use client'

import { services } from '@/app/dummyData'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { ArrowLeft } from 'lucide-react'

type WeOfferItem = {
  id: number
  name: string
}

type Service = {
  id: number
  name: string
  img: string
  note?: string
  idealFor?: string
  idealfor?: string // fallback for typo
  matters?: string
  weOffer?: WeOfferItem[]
}

const Page = () => {
  const { id } = useParams()
  const [service, setService] = useState<Service | null>(null)
  const router = useRouter()
  useEffect(() => {
    if (!id) return;

    const foundService = services.find((s) => s.id === Number(id))
    setService(foundService || null)
  }, [id])

   useEffect(() => {
      AOS.init({
        duration: 800, // animation duration
        easing: 'ease-in-out', // easing option
        once: true, // whether animation should happen only once
      })
   }, [])
  
  if (!service) return <div>Loading or service not found...</div>

  return (
    <div className="p-5 max-w-[1000px] m-auto space-y-4">
      <div data-aos="fade-up" onClick={() => router.back()} className='text-[14px] cursor-pointer font-[600] flex items-center gap-1'><ArrowLeft className='w-[14px]' />
      Back</div>
      <img data-aos="fade-up" src={service.img} alt={service.name} className="h-[300px] object-cover w-full" />
      <h1 data-aos="fade-up" className="text-2xl font-bold capitalize">{service.name}</h1>
      <p data-aos="fade-up" className="text-[14px] text-[#4e4e4e]">{service?.note || 'No description available.'}</p>

      <div data-aos="fade-up" className="space-y-2 flex flex-col">
        <p className="text-[14px] text-black capitalize font-[600]">Why it matters:</p>
        <p className="text-[14px] text-[#4e4e4e]">{service.matters}</p>
      </div>

      <div data-aos="fade-up" className="space-y-2 flex flex-col">
        <p className="text-[14px] text-black capitalize font-[600]">What we offer:</p>
        <ul className="list-disc list-inside text-[#4e4e4e] text-[14px] space-y-1">
          {service.weOffer?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div data-aos="fade-up" className="space-y-2 flex flex-col">
        <p className="text-[14px] text-black font-[600]">Ideal For:</p>
        <p className="text-[14px] text-[#4e4e4e]">{service.idealFor || service.idealfor}</p>
      </div>
    </div>
  )
}

export default Page