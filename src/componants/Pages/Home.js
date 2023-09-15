import React from 'react'
import LandPage from '../land_page/LandPage'
import Section1 from '../section1/Section1'
import Services from '../Services/Services'
import Gallery from '../Gallery/Gallery'
import Cards from '../Cards/Cards'
import Team from '../Team/Team'
import Feedback from '../feedback/Feedback'


const Home = () => {
  return (
    <div>
      <LandPage/>
      <Section1/>
        <Services/>
        <Gallery/>
        <Cards/>
        <Team/>
        <Feedback/>

    </div>
  )
}

export default Home
