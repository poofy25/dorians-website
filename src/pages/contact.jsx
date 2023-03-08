import { useState } from 'react'

import HeaderComponent from '../components/header/headerComp'
import FooterComponent from '../components/footer/footerComp'

import ContactForm from '../components/contactPageComponents/contactForm/contactForm'
import ContactTitle from '../components/contactPageComponents/contactTitle/contactTitle'
import ContactSocials from '../components/contactPageComponents/contactSocials/contactSocials'

function ContactPage() {

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <div className="WebsiteContent">
    <ContactTitle/>
    <ContactForm/>
    <ContactSocials/>
  
    </div>
    <FooterComponent/>
    </>
  )
}

export default ContactPage
