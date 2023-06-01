import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [favoriteTeam, setFavoriteTeam] = useState("")
  const [favoritePlayer, setFavoritePlayer] = useState("")
  const [showCard, setShowCard] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (favoriteTeam.length >= 3 && favoriteTeam[0] !== " " && favoritePlayer.length >= 6) {
      setShowCard(true)
    } else {
      setShowCard(false)
      alert("Por favor chequea que la información sea correcta")
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Favorite team: </label>
        <input
          type="text"
          id="team"
          value={favoriteTeam}
          onChange={(e) => setFavoriteTeam(e.target.value)}
        />
        <label>Favorite player: </label>
        <input
          type="text"
          id="player"
          value={favoritePlayer}
          onChange={(e) => setFavoritePlayer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {showCard && <Card favoriteTeam={favoriteTeam} favoritePlayer={favoritePlayer} />}
    </div>
  );
}

export default App
