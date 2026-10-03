import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">
      <Hero /><About /><Skills /><Experience /><Projects /><Certifications /><Contact />
    </main>
    <Footer />
  </>)
}
