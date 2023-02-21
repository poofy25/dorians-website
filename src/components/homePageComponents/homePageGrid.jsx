
import './homePage.css'

import carlasDreamsPoster from "/src/assets/carlasDreamsPoster.png"
import voltEnergyLogo from "/src/assets/voltEnergyLogo.png"
import gogosiDomnita from "/src/assets/gogosiDomnita.png"
import noapteMuzeurilorPoster from "/src/assets/noapteMuzeurilorPoster.png"
import pingpongLogo from "/src/assets/pingpongLogo.png"
import puzzleDomnita from "/src/assets/puzzleDomnita.png"


function HomePageGrid() {

  return (
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
  )
}

export default HomePageGrid