import { useState } from 'react'

import HeaderComponent from '../components/header/headerComp'
import HomePageGrid from '../components/homePageComponents/homePageGrid'

function HomePage() {

  return (
    <>
    <HeaderComponent/>
    <div className="WebsiteContent">
    <HomePageGrid/>
    </div>
    
    </>
  )
}

export default HomePage