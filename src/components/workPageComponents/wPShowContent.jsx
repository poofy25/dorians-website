
import './workPage.css'
import WorkExample from './workExample'



import puzzleDomnita from "/src/assets/Postari/puzzleDomnita.png"
import gogosiDomnita from "/src/assets/Postari/gogosiDomnita.png"


import carlasDreamsPoster from "/src/assets/Posters/carlasDreamsPoster.png"
import noapteMuzeurilorPoster from "/src/assets/Posters/noapteMuzeurilorPoster.png"


import pingpongLogo from "/src/assets/Logos/pingpongLogo.png"
import voltEnergyLogo from "/src/assets/Logos/voltEnergyLogo.png"

import IntroMetafarm from '/src/assets/Videos/IntroMetafarm.mp4'
import IntroMetafarmImage from '/src/assets/Videos/IntroMetafarm.png'
import BlockchainMetafarm from '/src/assets/Videos/BlockchainMetafarm.mp4'
import BlockchainMetafarmImage from '/src/assets/Videos/BlockchainMetafarm.png'






export  function WorkPageLogoContainer() {
    



  return (
    <>
    <WorkExample imgSrc={pingpongLogo} mainText={'PingPong Plaza Logo'}/>
    <WorkExample imgSrc={voltEnergyLogo} mainText={'Volt Energy Logo'}/>
    </>
  )
}

export  function WorkPagePostersContainer() {
    



    return (
    <>
    <WorkExample exampleType="Poster"  imgSrc={noapteMuzeurilorPoster} mainText={'Noapte Muzeurilor Event Poster'}/>
    <WorkExample exampleType="Poster" imgSrc={carlasDreamsPoster} mainText={'Carlas Dreams Event Poster'}/>
    </>
    )
  }

  
export  function WorkPagePostariContainer() {
    



    return (
      <>
      <WorkExample imgSrc={gogosiDomnita} mainText={'Domnita Facebook Post'}/>
      <WorkExample imgSrc={puzzleDomnita} mainText={'Puzzle Post for Domnita'}/>
      </>
    )
  }

  
export  function WorkPageVidsContainer() {
    



    return (
      <>
      <WorkExample exampleType="Video" vidSrc={IntroMetafarm} vidPosterSrc={IntroMetafarmImage}/>
      <WorkExample exampleType="Video" vidSrc={BlockchainMetafarm} vidPosterSrc={BlockchainMetafarmImage}/>
      </>
    )
  }
  

