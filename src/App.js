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
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';


//questo prenderà in input la chiave fornita da Clarifai
const app = new Clarifai.App({
 apiKey: '3134eb59945b4fb1825c0b1cd897996b'
});

class App extends Component {
  constructor() {
    super(); //ci deve essere per poterlo utilizzare (API)
    //route indicates where are we on the page
    this.state = {
      input: '',
      imageUrl: '',
      box:{},
      route: 'signin',
      isSignedIn: 'false'
    }
  }

  calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  //DOm manipulation
  const image = document.getElementById('inputImage');
  //prendo dimensioni immagini
  const width = Number(image.width);
  const height = Number(image.height);
      console.log(width, height);
      //this will fill out box state
      return {
        //calcola scatola, numeri verranno utilizzati con css
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow:  height - (clarifaiFace.bottom_row * height)
      }

  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    //update component on input
    this.setState({input : event.target.value});
  }

  onRouteChange = (route) => {
    //curly bc is obj
    console.log(route);
    if(route === 'signout') {
      this.setState( {isSignedIn : false});
    } else if(route === 'home') {
        this.setState( {isSignedIn : true});
    }
      this.setState({route : route});

  }

  onButtonSubmit = () => {
    //passa input a facerecognition component
    this.setState({imageUrl: this.state.input});
    //pezzo sotto import automatico via doc
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      //metto input non imagurl
      this.state.input).then(response => 
      this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
      /*
      PRE ES6
      function(response) {
        console.log('Retrieving response');
        this.calculateFaceLocation(response);
        //torna la scatola che definisce il punto in cui c'è la faccia
        //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err){

      }*/
    console.log('click');

  }
      
 
  render() {
    //destructuring, helps removing this.state
    const {isSignedIn, imageUrl, route, box} = this.state;
    return ( 
    <div className="App">

    <ParticleComponent className = 'particles'/>

    <Navigation onRouteChange={this.onRouteChange}/>
    {route === 'home' 
    ?
      <div>
        <Logo />
        <Rank />
        <ImageLinkForm 
      onInputChange = {this.onInputChange} 
      onButtonSubmit = {this.onButtonSubmit}/> {/* proprieta che viene passata, this per acedere */}
        <FaceRecognition box={box} imageUrl = {imageUrl}/>
      </div>
      : (
          route === 'signin' ?
          <SignIn onRouteChange={this.onRouteChange}/>
          :
          <Register onRouteChange={this.onRouteChange}/>

        )

   }
    </div>
  );
}
}


export default App;