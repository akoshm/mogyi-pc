import { Route, Routes } from 'react-router-dom';
import Landing from './components/LandingPage'
import TopNav from "./components/TopNav.js"
import About from './components/About.js';
import './App.css';


function App() {
  return (<>
    <TopNav />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
  );
}

export default App;
