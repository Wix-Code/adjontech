import React from 'react'
import HeroPage from "./components/home/HeroPage"
import Partners from './components/home/Partners'
import Partner from './components/home/Partner'
import Banner from './components/home/Banner'
import Services from './components/home/Services'
import FAQ from './components/home/FAQ'

const page = () => {
  return (
    <div className='space-y-8 mb-8 flex flex-col'>
      <HeroPage />
      <Partners />
      <Services />
      <Partner />
      <Banner />
      <FAQ />
    </div>
  )
}

export default page