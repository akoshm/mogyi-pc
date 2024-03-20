import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js'
import TopNav from "./components/TopNav.js"
import About from './components/About.js';
import Contact from './components/Contact.js';
import Shop from './components/Shop.js';
import "./main.css";

function App() {
  return (<>
    <TopNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </>
  );
}

export default App;
