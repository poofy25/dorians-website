import "./contactPage.css"



function ContactForm() {

  const serviceID = "service_7qunlpp"
  const publicKey = "I6wOL8h24eLXq0Ime"
  const templateID = "template_tqn06ds"
  const form = document.querySelector(".contactFormContainer")


  const sendForm = ()=>{
  console.log("gay")
  var templateParams = {
    from_name: document.getElementById("labelName").value,
    email_adress:document.getElementById("labelEmail").value,
    message: document.getElementById("labelMessage").value
  };
 

  
emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }



  return (
    <div className="contactFormContainer">
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
