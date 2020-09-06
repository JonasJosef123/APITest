import React from 'react';
import './Planet.css';



const planet = (props) =>{
  const {name, gravity, population, climate, pics} = props;

  return (
    <div className="test">
    <h2 className= "planetName" >{name}</h2>
    <img alt='planetPic'src={pics} width="450" height="430"/>
      <div className="planetText">

      <p>Gravity: {gravity}</p>
      <p>Population: {population}</p>
      <p>Climate: {climate}</p>
      </div>
    </div>
  )
}


export default planet;
