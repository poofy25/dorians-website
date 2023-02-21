import { useState } from 'react'

import HeaderComponent from '../components/header/headerComp'
import FooterComponent from '../components/footer/footerComp'
import HomePageGrid from '../components/homePageComponents/homePageGrid'

function HomePage() {

  return (
    <>
    <HeaderComponent/>
    <div className="WebsiteContent">
    <HomePageGrid/>
    </div>
    <FooterComponent/>
    </>
  )
}

export default HomePage