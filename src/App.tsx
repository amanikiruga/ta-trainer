import React, { useState } from 'react';
import logo from './logo.svg';
import CARDS from './assets/cards.json'
import {ControlPanel} from './components/ControlPanel'
import {CardViewer} from './components/CardViewer'
import './App.css';
import { Card } from './interfaces/card';
function App() : JSX.Element {
  const getRandomCardIndex = () => {
    return Math.floor(Math.random() * CARDS.length); 
    
  }
  const randIndex = getRandomCardIndex(); 
  const [currentCardId, setCurrentCardId] = useState<number>(randIndex); 
  return (
    <div className="App">
      <div className="row">
        <ControlPanel className={"row-item"} btnOnClick = {setCurrentCardId} randomCardIndexGenerator = {getRandomCardIndex}/>
        <CardViewer  className={"row-item"} activeCardIndex = {currentCardId}/>
      </div>
        
    </div>
  );
}

export default App;
