import React from 'react'
import LandPage from '../land_page/LandPage'
import Cards from '../Cards/Cards'
import Booking from '../Booking/Booking'

const LoggedPage = () => {
  return (
    <div>
      <LandPage/>
        <Cards/>
        <Booking/>
    </div>
  )
}

export default LoggedPage
