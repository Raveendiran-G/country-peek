import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="home">
        <p className="home__status">
          You have not saved any countries yet.
        </p>

        <Link to="/">Back to Explore</Link>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  )
}

export default Favourites