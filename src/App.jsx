

import "./App.css";
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
