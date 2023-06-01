function Card({ favoriteTeam, favoritePlayer }) {
  return (
    <div className="card">
      <h2>Your favorite team is: {favoriteTeam}</h2>
      <p>Your favorite player is: {favoritePlayer}</p>
    </div>
  )
}

export default Card