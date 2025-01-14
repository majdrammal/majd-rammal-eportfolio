import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Copyright from "./components/Copyright";
import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Modal from './components/Modal';
import BackgroundAnimations from './components/ui/BackgroundAnimations';

function App() {

  let isNavOpen = false
    function navBarOpen() {
        if (!isNavOpen) {
            document.body.classList += ' nav__bar--open'
            isNavOpen = !isNavOpen
        }
        else {
            document.body.classList.remove('nav__bar--open')
            isNavOpen = !isNavOpen
        }
    }

  return (
    <Router>
      <div className="body">
        <NavBar navBarOpen={navBarOpen}/>
        <Nav navBarOpen={navBarOpen}/>
        <Modal />
        <BackgroundAnimations />
        <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/stack" element={<Stack />} />
                <Route exact path="/projects" element={<Projects />} />
            </Routes>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
