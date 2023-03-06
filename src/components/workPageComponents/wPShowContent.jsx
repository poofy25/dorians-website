
import './workPage.css'
import WorkExample from './workExample'



import martisorDomnita from "/src/assets/Postari/martisorDomnita.png"
import rasfatateMallDova from "/src/assets/Postari/rasfatateMallDova.png"
import icecreamDomnita from "/src/assets/Postari/icecreamDomnita.png"


import carlasDreamsPoster from "/src/assets/Posters/carlasDreamsPoster.png"
import noapteaMuzeurilorPoster from  "/src/assets/Posters/noapteaMuzeurilorPoster.png"
import noapteaMuzeurilorPoster2 from "/src/assets/Posters/noapteaMuzeurilorPoster2.0.png"


import VersuriLogo from "/src/assets/Logos/VersuriLogo.png"
import FotoLogo from "/src/assets/Logos/FotoLogo.png"
import PingpongLogo from "/src/assets/Logos/PingpongLogo.png"

import IntroMetafarm from '/src/assets/Videos/IntroMetafarm.mp4'
import IntroMetafarmImage from '/src/assets/Videos/IntroMetafarm.png'
import BlockchainMetafarm from '/src/assets/Videos/BlockchainMetafarm.mp4'
import BlockchainMetafarmImage from '/src/assets/Videos/BlockchainMetafarm.png'






export  function WorkPageLogoContainer() {
    



  return (
    <>
    <WorkExample imgSrc={VersuriLogo} mainText={'Versuri la comanda Logo'}/>
    <WorkExample imgSrc={FotoLogo} mainText={'Melius Foto Company Logo'}/>
    <WorkExample imgSrc={PingpongLogo} mainText={'Ping Pong Plaza Logo'}/>
    </>
  )
}

export  function WorkPagePostersContainer() {
    



    return (
    <>
    <WorkExample exampleType="Poster"  imgSrc={noapteaMuzeurilorPoster} mainText={'Noapte Muzeurilor Event Poster'}/>
    <WorkExample exampleType="Poster" imgSrc={carlasDreamsPoster} mainText={'Carlas Dreams Event Poster'}/>
    <WorkExample exampleType="Poster" imgSrc={noapteaMuzeurilorPoster2} mainText={'Noapte Muzeurilor Event Poster'}/>
    </>
    )
  }

  
export  function WorkPagePostariContainer() {
    



    return (
      <>
      <WorkExample imgSrc={martisorDomnita} mainText={'Domnita Facebook Post'}/>
      <WorkExample imgSrc={rasfatateMallDova} mainText={'Mall Dova Shopping Post'}/>
      <WorkExample imgSrc={icecreamDomnita} mainText={'Domnita Facebook Post'}/>
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
  

