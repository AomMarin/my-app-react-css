import logo from './logo.svg';
import "./input.css"
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPages';
import DetailsPage from './pages/DetailsPages';
import Navbar from './components/Navbar';
function App() {
  return ( 
  <div class="h-screen bg-indigo-400" >
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path = "/details" element = {<DetailsPage />}/>
    </Routes>
  </div>
  );
}

export default App;
