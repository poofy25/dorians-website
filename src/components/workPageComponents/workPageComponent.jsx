
import './workPage.css'



function WorkPageContent() {
    

const btnOnClick = (e) =>{
    let prevClickedBtn = document.querySelector(".workBtnActive")
    if(e.target.classList.contains('workBtnInactive')){
        e.target.classList.remove('workBtnInactive');
        e.target.classList.add('workBtnActive');
        prevClickedBtn.classList.remove('workBtnActive');
        prevClickedBtn.classList.add('workBtnInactive')
    }
}


  return (
<div className="workPageContent">

  <div className="workButtons">
   <button className='workBtnActive'   onClick={btnOnClick}>Logouri</button>
   <button  className='workBtnInactive'  onClick={btnOnClick}>Postări</button>
   <button className='workBtnInactive' onClick={btnOnClick}>Postere</button>
   <button  className='workBtnInactive'  onClick={btnOnClick}>Clipuri</button>
  </div>

</div>
  )
}

export default WorkPageContent