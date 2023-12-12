import React from 'react';
import './App.css';
import Pokedex from './PokeList';
import PokeCard from './Pokecard';

function App() {
  return (


    <div>
<h1>Pokedex:</h1>
<Pokedex />    

<h1>PokeCard:</h1>
<PokeCard 
id = {4}
name = "Charmander" 
type = "fire" 
xp = {100}

/>
    </div>
  );
}

export default App;
