
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { Login } from './Components/Login/Login';
import { Protected } from './Components/Login/Protected';
import { Drawers } from './Components/Drawer/Drawer';
import Sidebar from './Components/Drawer/Slidebar';


function App() {
  return (
    <div className="App">
     <BrowserRouter>

     <Sidebar>
      <Routes>
      <Route path="/" element={<Protected Component={Home}/>} />
        <Route path="/about" element={<Protected Component={About}/>} />
        <Route path="/contact" element={<Protected Component={Contact}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Login/>} />
      </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
