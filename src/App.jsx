
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
     <Route path='/home' element={<HomePage/>}   />
     <Route path='/work' element={<WorkPage/>}   />
     <Route path='/about' element={<AboutPage/>}   />
     <Route path='/contact' element={<ContactPage/>}   />


    </Routes>
    </HashRouter>
    </>
  )
}

export default App
