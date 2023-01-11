import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro.js'
import Info from './components/Info.js'
import Projects from './components/Projects.js'
import Project from './components/Project.js'
import React, { useState, useEffect } from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faArrowRight, faArrowLeft, faInfo} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faArrowRight, faArrowLeft, faInfo)




function App() {
  const [bgcolor, setBgcolor]= useState(null)

  function changeBackground(color) {
    setBgcolor(color)
  }




  return (
    <div className="App" style={{backgroundColor: bgcolor, transition: '0.3s'} }>
      <Info />
      <Intro />
      <Projects passedDownone={changeBackground} poop={bgcolor}/>
    </div>
  );
}

export default App;
