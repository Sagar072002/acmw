import './App.css';
import './Script';
import AboutUs from './pages/AboutUs';
import Main from './pages/Main';
import Events from './pages/Events';
import {BrowserRouter,Routes,Route} from "react-router-dom";



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (  
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='about' element={<AboutUs/>}/>
    <Route path='events' element={<Events/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
