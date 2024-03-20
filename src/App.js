import { Route, Routes } from 'react-router-dom';
import Landing from './components/LandingPage'
import TopNav from "./components/TopNav.js"
import About from './components/About.js';
import Shop from './components/Shop.js';
import "./components/main.css";

function App() {
  return (<>
    <TopNav />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </>
  );
}

export default App;
