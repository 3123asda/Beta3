import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact ';
import {Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link  to="/">Home</Link>
        </li>
        <li>
          <Link  to="/about">About</Link>
        </li>
        <li>
          <Link  to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </>
  );
}

export default App;
