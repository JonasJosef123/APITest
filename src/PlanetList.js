import React from 'react';
import './PlanetList.css';
import Planet from './Planet.js';


const planetList = ({planets,pics}) =>{
  const pic =pics;

  const planeten =planets.map((el,i) => {
    return  <Planet key ={i}
    name ={el.name}
    gravity = {el.gravity}
    population = {el.population}
    climate= {el.climate}
    pics = {pic[i].pic}
    />
  }
    )

  return (
    <div className="wrapper">
      {planeten}
    </div>
  )
}

export default planetList;
