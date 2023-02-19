import { useState } from 'react'

import './header.css'

function HeaderComponent() {

    

    let hasOpened = false;
  const hamburgerHandler = () => {

      if (hasOpened === false){
        hasOpened = true;
        console.log("Open");
        document.querySelector(".hamburgerButton").classList.add('open');
        document.querySelector(".hamburgerMenu").classList.add('show');
      } else {
        hasOpened = false;
        console.log("Close")
        document.querySelector(".hamburgerButton").classList.remove('open');
        document.querySelector(".hamburgerMenu").classList.remove('show');
      }

  }


  return (
    <header className="headerContainer">
    <p>LESNIC <br/> DORIAN </p>
    <button className='hamburgerButton' onClick={hamburgerHandler}>
        <div className="hamburgerButtonRow1"></div>
        <div className="hamburgerButtonRow2"></div>
        <div className="hamburgerButtonRow3"></div>
    </button>
    <div className="hamburgerMenu">
        about haha
    </div>
    </header>
  )
}

export default HeaderComponent
