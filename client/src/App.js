import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import PlayersList from './components/playersList'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    obtenerDatos();
  }, [])

  const obtenerDatos = async() => {
    const data = await fetch('http://localhost:8000/players')
    const players = await data.json()
    setPlayers(players.players)
  }

  return (
    <Fragment>
      <Navbar brand='Players'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign: 'center'}}>Players</h2>
            <PlayersList players={players}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAlign: 'center'}}>New</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
