import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/about' element={<About />}>About</Route>
          <Route path='/contact' element={<Contact />}>Contact</Route>
        </Routes>
    </Router>
    </>
  )
}

export default App;
