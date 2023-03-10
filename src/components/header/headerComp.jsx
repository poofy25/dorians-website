import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'


function HeaderComponent() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/home');
  };

  const navigateToContacts = () => {

    navigate('/contact');
  };
  
  const navigateWork = () => {
    navigate('/work');
  };
  const navigateAbout = () => {
    navigate('/about');
  };

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

    <div className="desktopHeaderButtons">
      <button onClick={navigateHome}>HOME</button>
      <button onClick={navigateWork}>WORK</button>
      <button onClick={navigateAbout}>ABOUT</button>
      <button onClick={navigateToContacts}>CONTACT</button>
    </div>



    <button className='hamburgerButton' onClick={hamburgerHandler}>
        <div className="hamburgerButtonRow1"></div>
        <div className="hamburgerButtonRow2"></div>
        <div className="hamburgerButtonRow3"></div>
    </button>
    <div className="hamburgerMenu">
       <button onClick={navigateHome} >HOME</button>
       <button onClick={navigateWork}>WORK</button>
       <button onClick={navigateAbout}>ABOUT</button>
       <button onClick={navigateToContacts}  >CONTACT</button>
    </div>
    </header>
  )
}

export default HeaderComponent
