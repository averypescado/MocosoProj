import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro.js'
import Info from './components/Info.js'
import Projects from './components/Projects.js'
import Project from './components/Project.js'
import Loader from './components/Loader.js'
import Footer from './components/Footer.js'
import React, { useState, useEffect } from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faArrowRight, faArrowLeft, faInfo} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faArrowRight, faArrowLeft, faInfo)




function App() {
  const [bgcolor, setBgcolor]= useState(null)
  const [loading,setLoading] =useState(true)

  function changeBackground(color) {
    setBgcolor(color)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);



  if (loading==true) {
    return (
      <Loader />
    )
  }
  return (
    <div className="App" style={{backgroundColor: bgcolor, transition: '0.3s'} }>
      <Info />
      <Intro />
      <Projects passedDownone={changeBackground} poop={bgcolor}/>
      <Footer />
    </div>
  );
}

export default App;
