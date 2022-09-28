import { BrowserRouter as Router, } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './pages/About'
import Education from './pages/Education'
import Abilities from './pages/Abilities'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import {ScrollToTop} from './components/scroll/ScrollToTop'


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <div className='flex flex-col h-screen'>
          <About />
          <Abilities />
          <Education />
          <Projects />
          <Contact />
        </div>
      </main>
      <ScrollToTop />
    </Router>
  );
}

export default App;
