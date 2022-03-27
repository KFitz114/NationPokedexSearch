import logo from './Poké_Ball_icon.svg.png';
import './App.css';
import PokemonGetter from './components/pokemonResponse.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1> National Dex Reference Guide</h1> 
        <img src={logo} className="App-logo" alt="logo" />
      <div>
        <PokemonGetter />
      </div>
    </div>
  );
}

export default App;
