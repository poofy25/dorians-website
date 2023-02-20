
import { HashRouter , Routes , Route } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import WorkPage from './pages/work.jsx';
import ContactPage from './pages/contact.jsx';
import AboutPage from './pages/about.jsx';

function App() {

  return (
    <>
    <HashRouter>
    <Routes>


     <Route index element={<HomePage/>}   />
    
     <Route path='/dorians-website' element={<HomePage/>}   />
     <Route path='/dorians-website/home' element={<HomePage/>}   />
     <Route path='/dorians-website/work' element={<WorkPage/>}   />
     <Route path='/dorians-website/about' element={<AboutPage/>}   />
     <Route path='/dorians-website/contact' element={<ContactPage/>}   />


    </Routes>
    </HashRouter>
    </>
  )
}

export default App
