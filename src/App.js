import './App.css';
import Navbar from './Navbar';
import AboutMe from './About';
import Contact from './Contact';
import Projects from './Projects';
import ScrollToTop from './ScrollToTop'; 

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <br /><br /><br /><br /><br />

      <section id="contact">
        <Contact />
      </section>

      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>

      <ScrollToTop />
    </div>
  );
}

export default App;
