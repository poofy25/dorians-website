import './workExample.css'



export default function WorkExample(props) {
let classNames = "workExampleContainer"
let exampleType = props.exampleType

if (exampleType === 'Poster'){
    classNames = "workExampleContainer PosterFormat"
}
if (exampleType === 'Video' ){
    classNames = "workExampleContainer VideoFormat"
}


if (exampleType !== 'Video'){
    return (
        <div className={classNames}>
            <img src={props.imgSrc}/>
            <p>{props.mainText}</p>
        </div>
          )
}

if (exampleType === 'Video'){
    return (
        <video className={classNames} style={{aspectRatio:4/5 , width:'100%' }} poster={props.vidPosterSrc} preload="auto" controls muted >
        <source src={props.vidSrc}/>
        </video>
          )
}
 
}