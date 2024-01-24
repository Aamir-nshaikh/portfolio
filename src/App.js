import Header from '../src/Components/Header/Header'
import Home from '../src/Components/Home/Home'
import './App.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/Project';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
