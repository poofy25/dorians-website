import "./contactSocials.css"

import facebookIcon from "/src/assets/Icons/facebookIcon.png"
import instagramIcon from "/src/assets/Icons/instagramIcon.png"
import linkedinIcon from "/src/assets/Icons/linkedinIcon.png"
import whatsappIcon from "/src/assets/Icons/whatsappIcon.png"
import viberIcon from "/src/assets/Icons/viberIcon.png"
import telegramIcon from "/src/assets/Icons/telegramIcon.png"


function ContactSocials (props) {



  return (

     <div className="contactSocialsContainer">

    <p>Mă poți găsii și aici!</p>
    <div className="contactSocialsBtns">

    <a><img src={facebookIcon} /></a>
    <a><img src={instagramIcon}/></a>
    <a><img src={linkedinIcon}/></a>
    <a><img src={telegramIcon}/></a>
    <a><img src={viberIcon}/></a>
    <a><img src={whatsappIcon}/></a>


    </div>

     </div>

  )
}

export default ContactSocials
