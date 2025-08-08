'use client'

import { services } from '@/app/dummyData'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Service = {
  id: number
  name: string
  img: string
  note?: string
}

const Page = () => {
  const { id } = useParams()
  const [service, setService] = useState<Service | null>(null)

  useEffect(() => {
    if (!id) return; // Skip if id is not ready

    const foundService = services.find((s) => s.id === Number(id))

    if (foundService) {
      setService(foundService)
    } else {
      setService(null)
    }
  }, [id])


  if (!service) return <div>Loading or service not found...</div>

  return (
    <div className="p-5 max-w-[1000px] m-auto space-y-4">
      <img src={service.img} alt={service.name} className="h-[300px] object-cover" />
      <h1 className="text-2xl font-bold capitalize">{service.name}</h1>
      <p className="text-[14px] text-[#4e4e4e]">{service?.note || 'No description available.'}</p>
    </div>
  )
}

export default Page