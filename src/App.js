import React, { Component } from 'react';
//Importi la cartella delle componenti
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';
import ParticleComponent from "./components/ParticleComponent/ParticleComponent.js";



class App extends Component {
      
 
  render() {
    return ( 
    <div className="App">

    <ParticleComponent className = 'particles'/>

    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm/>

    {// trasformati in javascript
    /*<Logo />
    /*<FaceRecognition/>*/}
    </div>
  );
}
}


export default App;