import React from 'react';
import './App.css';
import Pokelist from './PokeList';

function App() {
  return (
    <div>
<PokeCard  
id={4} 
name = "Charmander" 
type = "fire" 
base_experience = {100}
image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png."

/>
    </div>
  );
}

export default App;
