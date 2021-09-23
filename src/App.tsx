import React from 'react';
import logo from './logo.svg';
import CARDS from './assets/cards.json'
import {ControlPanel} from './components/ControlPanel'
import {CardViewer} from './components/CardViewer'
import './App.css';
function App() : JSX.Element {
  return (
    <div className="App">
        <ControlPanel></ControlPanel>
        <CardViewer></CardViewer>
    </div>
  );
}

export default App;
