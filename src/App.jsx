import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Hero from './componet/header/header'
import Services from './componet/Services/Services'
import StatsSection from './componet/StatsSection/StatsSection'
import IntroSection from './componet/IntroSection/IntroSection'
import ContactSection from './componet/ContactSection/ContactSection'
import './App.css'

function App() {


  return (
  <>
    <Hero />
    <Services />
    <StatsSection />
   <IntroSection />
    <ContactSection />
  </>
  )
}

export default App
