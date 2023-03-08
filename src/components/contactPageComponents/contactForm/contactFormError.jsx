import "./contactForm.css"

const succesfullMessage = {
    background : "rgba(0, 255, 0 , .75)",
    border:"rgb(0, 50, 0)"
}

const unsuccesfullMessage = {
    background : "rgba(255,0, 0 , .75)",
    border:"rgb(50, 0, 0)"
}

function FormError(props) {


    let colorStyle = unsuccesfullMessage;
    const animation = {
        position:"absolute",
        opacity:"0"
    }
if (props.errorMessage === "Mesajul a fost expediat!"){

colorStyle = succesfullMessage;

animation.position = "relative"
animation.opacity = "1"

} else if (props.errorMessage !== undefined) {
animation.position = "relative"
animation.opacity = "1"
}


  return (

      <div className="errorContainer" style={{
        backgroundColor: colorStyle.background,
        border: `1px solid ${colorStyle.border}`,
        position:animation.position,
        opacity:animation.opacity
        }}>
        <p>{props.errorMessage}</p>
      </div>

  )
}

export default FormError
