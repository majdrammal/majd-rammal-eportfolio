import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Copyright from "./components/Copyright";
import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Modal from './components/Modal';

function App() {

  return (
    <Router>
      <div className="body">
        <NavBar />
        <Nav />
        <Modal />
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Stack" element={<Stack />} />
                <Route exact path="/Projects" element={<Projects />} />
            </Routes>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
