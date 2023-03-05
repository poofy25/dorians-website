import { useState } from 'react'

import HeaderComponent from '../components/header/headerComp'
import FooterComponent from '../components/footer/footerComp'

import ContactForm from '../components/contactPageComponents/contactForm'

function ContactPage() {

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <div className="WebsiteContent">
    <p>Working on...</p>
    <ContactForm/>
  
    </div>
    <FooterComponent/>
    </>
  )
}

export default ContactPage
