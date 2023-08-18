import NavbarE from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Habilidades from './Components/Habilidades/Habilidades'
import Who from './Components/Who/Who'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleEnglish = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <>
      <NavbarE toggle={toggleEnglish} isEnglish={isEnglish}/>
      <Home isEnglish={isEnglish}/>
      <Who isEnglish={isEnglish}/>
      <Habilidades isEnglish={isEnglish}/>
      <Portfolio isEnglish={isEnglish}/>
      <Footer isEnglish={isEnglish}/>
    </>
  )
}

export default App
