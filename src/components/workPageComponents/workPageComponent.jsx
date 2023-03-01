
import { useState } from 'react';
import './workPage.css'
import { WorkPageLogoContainer , WorkPagePostariContainer , WorkPagePostersContainer , WorkPageVidsContainer } from './wPShowContent.jsx';

const WorkPageShowComponents = {
  Logos:<WorkPageLogoContainer/>,
  Posters:<WorkPagePostersContainer/>,
  Postari:<WorkPagePostariContainer/>,
  Vids:<WorkPageVidsContainer/>
}


function WorkPageContent() {
    
const [currentWorkShow , setWorkShow] = useState(WorkPageShowComponents.Logos)
const btnOnClick = (e) =>{
    let prevClickedBtn = document.querySelector(".workBtnActive")
    if(e.target.classList.contains('workBtnInactive')){
      setWorkShow(e.target.attributes.show.value)
        e.target.classList.remove('workBtnInactive');
        e.target.classList.add('workBtnActive');
        prevClickedBtn.classList.remove('workBtnActive');
        prevClickedBtn.classList.add('workBtnInactive')
    }


}

  return (
<div className="workPageContent">
  <div className="workButtons">
   <button className='workBtnActive'  onClick={btnOnClick} show={'Logos'} >Logouri</button>
   <button  className='workBtnInactive'  onClick={btnOnClick} show={'Postari'}>Postări</button>
   <button className='workBtnInactive' onClick={btnOnClick} show={'Postere'} >Postere</button>
   <button  className='workBtnInactive'  onClick={btnOnClick} show={'Vids'} >Clipuri</button>
  </div>
  
 <div className="showWork" >
   {currentWorkShow}
 </div>

</div>
  )
}

export default WorkPageContent