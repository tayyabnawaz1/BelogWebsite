import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AboutUs from './Component/Pages/AboutUs';
import Home from './Component/Pages/Home';
import ContactUs from './Component/Pages/ContactUs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
