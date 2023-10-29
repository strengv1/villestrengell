import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import { useRef } from 'react'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const refToContact = useRef(null)

  return (
    <div className="wrapper">
      <Hero refToContact={refToContact}/>
      <About />
      <Contact ref={refToContact}/>
      <Footer />
    </div>
  )
}

export default App
