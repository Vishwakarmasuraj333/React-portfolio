import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import TopButton from './components/TopButton';


function App() {
  return (
    <>
      <Header />
      <Banner id="Banner" />
      <Projects id="projects" />
      <About id="About" />
      <Skills id="Skills" />
      <Contact id="Contact" />
      <Footer id="Footer" />
      <TopButton id="TopButton" />
    </>


  );
}

export default App;
