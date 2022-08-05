import React, { Component } from 'react';
//Importi la cartella delle componenti
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import './App.css';
import ParticleComponent from "./components/ParticleComponent/ParticleComponent.js";
import Clarifai from 'clarifai';


//questo prenderà in input la chiave fornita da Clarifai
const app = new Clarifai.App({
 apiKey: '3134eb59945b4fb1825c0b1cd897996b'
});

class App extends Component {
  constructor() {
    super(); //ci deve essere per poterlo utilizzare (API)
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    //update component on input
    this.setState({input : event.target.value});
  }

  onButtonSubmit = () => {
    //passa input a facerecognition component
    this.setState({imageUrl: this.state.input});
    //pezzo sotto import automatico via doc
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      //metto input non imagurl
      this.state.input).then(
      function(response) {
        console.log('Retrieving response');
        //torna la scatola che definisce il punto in cui c'è la faccia
        //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err){

      }

    );
    console.log('click');

  }
      
 
  render() {
    return ( 
    <div className="App">

    <ParticleComponent className = 'particles'/>

    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm 
     onInputChange = {this.onInputChange} 
      onButtonSubmit = {this.onButtonSubmit}/> {/* proprieta che viene passata, this per acedere */}
    <FaceRecognition imageUrl = {this.state.imageUrl}/>
    </div>
  );
}
}


export default App;