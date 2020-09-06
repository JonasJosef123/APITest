import React from 'react';
import PlanetList from './PlanetList.js';
import './App.css';
import pic from './pics/Tattoine.jpg'
import pic2 from './pics/Alderaan.png'
import pic3 from './pics/Yavin-4.png'
import pic4 from './pics/Hoth.png'
import pic5 from './pics/Dagobah.jpg'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      characters : [],
      planetPics : [
      {pic: pic},
      {pic: pic2},
      {pic : pic3},
      {pic: pic4},
      {pic: pic5},
      {pic : pic},
      {pic: pic2},
      {pic: pic3},
      {pic : pic4},
      {pic: pic5,},
      {pic: pic}]
      }
    }

  async componentDidMount(){
    const star = await fetch("https://swapi.py4e.com/api/planets/");
    const testStar = await star.json();
    this.setState({ characters : testStar.results});

  }



  render() {


console.log(this.state.planetPics)



    return (
      <div>
        <h1 className ="main">The most famous planets in the Star Wars movies</h1>
        <PlanetList planets={this.state.characters} pics ={this.state.planetPics}/>
      </div>


    )

  }
}
export default App;
