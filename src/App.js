import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/LandingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
