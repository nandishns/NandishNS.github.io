
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Events from './components/Events';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills/>
      <Experience/>
      <Projects />
      <Events/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
