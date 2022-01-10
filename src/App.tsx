import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import FixedNav from './components/FixedNav';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {

  return (
    <div>
      <FixedNav />
      <Navbar />
      <Homepage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
