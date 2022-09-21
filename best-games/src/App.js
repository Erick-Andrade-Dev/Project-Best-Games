import React, { Component } from 'react'
import './App.css';
import BestGames from './Components/BestGame';
import Header from './Components/Header';
import games from './Data/data';

class App extends Component {
  render() {
    return(
      <div className='app-react'>
        <Header />
        <BestGames games= { games }/>
      </div>      
    )
  }
}


export default App
