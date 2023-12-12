import React from "react";
import './Pokecard.css';
const PokeCard = (props) =>{
    return(<>
       
        <div className="card">
        <h2 id="title">{props.name}</h2>
            <div>id:{props.id}</div> 
            <p>type: {props.type}</p>
            <p>xp: {props.xp}</p>
            <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png.`}/>
        </div> 
        </>
    )
}

export default PokeCard

