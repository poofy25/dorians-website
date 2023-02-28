import { useState } from 'react'

import HeaderComponent from '../components/header/headerComp'
import FooterComponent from '../components/footer/footerComp'

import WorkPageContent from '../components/workPageComponents/workPageComponent'

function WorkPage() {

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <div className="WebsiteContent">
    <WorkPageContent/>
    </div>
    <FooterComponent/>
    </>
  )
}

export default WorkPage
