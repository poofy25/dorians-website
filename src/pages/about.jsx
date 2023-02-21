import { useState } from 'react'

import HeaderComponent from '../components/header/headerComp'
import FooterComponent from '../components/footer/footerComp'
function AboutPage() {

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <div className="WebsiteContent">
    <p>THIS IS ABOUT ME</p>
    
  
    </div>
    <FooterComponent/>
    </>
  )
}

export default AboutPage
