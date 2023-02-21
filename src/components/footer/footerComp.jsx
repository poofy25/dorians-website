
import './footer.css'
import InstagramIcon from "/src/assets/instagramIcon.png"

function FooterComponent() {



  return (
  <footer className='footerContainer'>

  <div className="footerMediaContainer">
    <a><img src={InstagramIcon}/></a>
    <a><img src={InstagramIcon}/></a>
    <a><img src={InstagramIcon}/></a>
  </div>
  <p>© Lesnic Dorian</p>

  </footer>
  )
}

export default FooterComponent
