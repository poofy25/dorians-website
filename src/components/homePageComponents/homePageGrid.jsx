
import './homePage.css'

import carlasDreamsPoster from "/src/assets/Posters/carlasDreamsPoster.png"
import voltEnergyLogo from "/src/assets/Logos/voltEnergyLogo.png"
import gogosiDomnita from "/src/assets/Postari/gogosiDomnita.png"
import noapteMuzeurilorPoster from "/src/assets/Posters/noapteMuzeurilorPoster.png"
import pingpongLogo from "/src/assets/Logos/pingpongLogo.png"
import puzzleDomnita from "/src/assets/Postari/puzzleDomnita.png"


function HomePageGrid() {

  return (
<div className="homePageContent">
    <div className="homePageIntroduction">
    <p>Cele mai bune designuri din Moldova!</p>

    <p>
        Numele meu este Dorian si sunt un graphic designer.<br/> Mă ocup cu 
        crearea Logo-urilor, Posterelor, Postărilor si Editări Video.<br/>
        Cînd nu desenez eu sunt un student, antreprenor si jucător de fotball.<br/>
        Dacă sunteti interesati de serviciile pe care le ofer, mă puteti contacta aici!

    </p>
    </div>
   
    <div className="homePageGrid">
   
    <div className="GridCard">
        <img src={carlasDreamsPoster}/>
        
        <p className='GridCardName'>Carlas Dreams <br/> Concert Poster</p>
    </div>

    <div className="GridCard">
        <img src={voltEnergyLogo}/>
        <p className='GridCardName'>Volt Energy <br/> Logo</p>
    </div>

    <div className="GridCard">
        <img src={gogosiDomnita}/>
        <p className='GridCardName'>Domnita Facebook <br/> Post </p>
    </div>

    <div className="GridCard">
        <img src={noapteMuzeurilorPoster}/>
        <p className='GridCardName'>Noaptea Muzeurilor <br/> Event Poster</p>
    </div>

    <div className="GridCard">
        <img src={pingpongLogo}/>
        <p className='GridCardName'>PingPong Plaza <br/> Logo</p>
    </div>

    <div className="GridCard">
         <img src={puzzleDomnita}/>
         <p className='GridCardName'>Domnita Facebook <br/> Post</p>
    </div>


    </div>
</div>
  )
}

export default HomePageGrid