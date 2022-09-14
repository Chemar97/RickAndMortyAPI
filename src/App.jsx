import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import ResidentsComponent from './components/ResidentsComponent'

function App() {
  const [location, setLocation] = useState({})
  const [typeId, setTypeId] = useState('')

  useEffect(() => {
    const randomID = Math.floor(Math.random() * 125) + 1;
    axios.get( `https://rickandmortyapi.com/api/location/${randomID}`)
    .then(res => setLocation(res.data));
  },[]);

  const searchType = () => {
    alert(typeId)
    axios.get( `https://rickandmortyapi.com/api/location/${typeId}`)
    .then(res => setLocation(res.data));
  }

  console.log(location);

  return (
    <div className="App">
      <header className='rm-banner'>
          <img className='rm-gif' src="https://i.gifer.com/XMeq.gif" alt="" />
      </header>
      
      <label htmlFor="buttonID"><input 
        className='search-box'
        type="text"
        placeholder='Incert location ID'
        value={typeId}
        onChange={e => setTypeId(e.target.value)}
      /><i className="fa-solid fa-magnifying-glass"></i></label>
      <button id='buttonID' className='searchButton' onClick={searchType}></button>
      
      <section className='location-info'>
        <h2>{location.name}</h2>
        <p><b>Type: </b>{location.type}</p>
        <p><b>dimension: </b>{location.dimension}</p>
        <p><b>Population: </b>{location.residents?.length}</p>
      </section>

      <ul className='residentContainer'>
        {location.residents?.map(resident => (
        <ResidentsComponent resident={resident} key={resident}/>
      ) )}
      </ul>
        
    </div>
  )
}

export default App
