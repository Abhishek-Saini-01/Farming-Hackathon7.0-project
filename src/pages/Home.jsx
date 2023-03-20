import React from 'react'

import { Header, HeroSlider, PopularMenu, ChooseUs, MenuPack, Testimonials, Download, Footer } from '../components'


const Home = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      {/* <Testimonials />
      <Download /> */}
      <Footer />
    </>
  )
}

export default Home