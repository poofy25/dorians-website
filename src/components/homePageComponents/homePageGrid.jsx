
import './homePage.css'


function HomePageGrid() {

  return (
    <div className="homePageGrid">
   
    <div className="GridCard">
        <img src='src\assets\carlasDreamsPoster.png'/>
        
        card 1
    </div>

    <div className="GridCard">
        <img src='../src/assets/voltEnergyLogo.png'/>
        card 2
    </div>

    <div className="GridCard">
        <img src='../src/assets/gogosiDomnita.png'/>
        card 3
    </div>

    <div className="GridCard">
        <img src='../src/assets/noapteMuzeurilorPoster.png'/>
        card 4 
    </div>

    <div className="GridCard">
        <img src='../src/assets/pingpongLogo.png'/>
        card 5
    </div>

    <div className="GridCard">
         <img src='../src/assets/puzzleDomnita.png'/>
         card 6
    </div>

    </div>
  )
}

export default HomePageGrid