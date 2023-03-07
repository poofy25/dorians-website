import "./contactPage.css"
import FormError from "./contactFormError.jsx"
import { useState } from "react"


const errorTexts = {
  succsseful : "Message send succsesfully!",
  unsuccsseful : "There was a problem and the text has not been sent!",
  nameError : "Name must not be blank!",
  emailError : "Invalid mail adress!",
  messageError : "Message must not be blank!",
  timeError : "You sent a message in the last 5 minutes, please try again later!"
}


function ContactForm() {

  const serviceID = "service_7qunlpp"
  const templateID = "template_tqn06ds"
  
  const [currentMessageError , setMessageError] = useState()

  const sendEmail = (params)=>{

    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           setMessageError(errorTexts.succsseful)
           let sentDate = Date.now()/1000
           localStorage.setItem("lastFormSent", sentDate);

        }, function(error) {
           console.log('FAILED...', error);
           setMessageError(errorTexts.unsuccsseful)
        });
    
      }

  const sendForm = ()=>{






  const templateParams = {
    from_name: document.getElementById("labelName").value,
    email_adress:document.getElementById("labelEmail").value,
    message: document.getElementById("labelMessage").value
  };

if (templateParams.from_name.length <= 1) return setMessageError(errorTexts.nameError)
if (templateParams.email_adress.includes('@') === false) return setMessageError(errorTexts.emailError)
if (templateParams.message.length <= 1) return setMessageError(errorTexts.messageError)
if (localStorage.getItem("lastFormSent") >= Date.now()/1000 - 10) return setMessageError(errorTexts.timeError)


  sendEmail(templateParams);


document.getElementById("labelName").value = ""
document.getElementById("labelEmail").value = ""
document.getElementById("labelMessage").value = ""


  }



  return (
    <div className="contactFormContainer">
     <FormError errorMessage={currentMessageError}/>
        <label>Nume</label>
        <input id="labelName" type="text" name="user_name" placeholder="Nume Prenume"/>
        <label >Email</label>
        <input id="labelEmail" type="email" name="user_email" placeholder="Adresă email"/>
        <label>Mesaj</label>
        <textarea id="labelMessage" name="message" placeholder="Mesaj"></textarea>
        <input className="sendBtn" type="submit" value="Trimite" onClick={sendForm}/>





      
    </div>
  )
}

export default ContactForm
