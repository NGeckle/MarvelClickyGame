import React, { Component } from 'react';
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Img from "./components/Img.json";
import Image from "./components/Image";
import apocalypse from "./images/apocalypse.jpg";
import blackPanther from "./images/blackPanther.jpg";
import captainAmerica from "./images/captainAmerica.jpg";
import darwin from "./images/darwin.jpg";
import drDoom from "./images/drDoom.jpg";
import gambit from "./images/gambit.jpg";
import ghostRider from "./images/ghostRider.jpg";
import hulk from "./images/hulk.jpg";
import ironFist from "./images/ironFist.jpg";
import ironMan from "./images/ironMan.jpg";
import legion from "./images/legion.jpg";
import magneto from "./images/magneto.jpg";
import mystique from "./images/mystique.jpg";
import nebula from "./images/nebula.jpg";
import quicksilver from "./images/quicksilver.jpg";
import silverSurfer from "./images/silverSurfer.jpg";
import spiderman from "./images/spiderman.jpg";
import thor from "./images/thor.jpg";
import ultron from "./images/ultron.jpg";
import wolverine from "./images/wolverine.jpg";

import './App.css';


class App extends Component {

  state = {
    picked: [],
    current: 0,
    highScore: 0,
    message: "Click an image to begin!"
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray;
  }

  pickImg = (name) => {
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        current: this.state.current + 1,
        highScore: this.state.current + 1 > this.state.highScore ? this.state.current + 1 : this.state.highScore,
        message: "Correct! Try not to screw up!"
      });
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect! Want to try again?",
        current: 0,
        picked: []
      });
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "Apocalypse":
        return `${apocalypse}`
      case "Black Panther":
        return `${blackPanther}`
      case "Captain America":
        return `${captainAmerica}`
      case "Darwin":
        return `${darwin}`
      case "Dr. Doom":
        return `${drDoom}`
      case "Gambit":
        return `${gambit}`
      case "Ghost Rider":
        return `${ghostRider}`
      case "Hulk":
        return `${hulk}`
      case "Iron Fist":
        return `${ironFist}`
      case "Iron Man":
        return `${ironMan}`
      case "Legion":
        return `${legion}`
      case "Magneto":
        return `${magneto}`
      case "Mystique":
        return `${mystique}`
      case "Nebula":
        return `${nebula}`
      case "Quicksilver":
        return `${quicksilver}`
      case "Silver Surfer":
        return `${silverSurfer}`
      case "Spiderman":
        return `${spiderman}`
      case "Thor":
        return `${thor}`
      case "Ultron":
        return `${ultron}`
      case "Wolverine":
        return `${wolverine}`
      default: 
        return `${apocalypse}`
    }
  }

  render() {
    return (
      <div>
        <Navbar current={this.state.current} highScore={this.state.highScore} message={this.state.message} /> 
        <div className="back">
          <Header />
          <Main>
            {this.shuffleArray(Img).map(image => (
              <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg} />
            ))}
          </Main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
