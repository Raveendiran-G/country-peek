import {
  createContext,
  useReducer,
  useEffect,
  useContext,
} from 'react'

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return [...state, action.payload]

    case 'REMOVE_FAVOURITE':
      return state.filter(
        (country) => country.cca3 !== action.payload
      )

    default:
      return state
  }
}

const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  const storedFavourites = JSON.parse(
    localStorage.getItem('favourites') || '[]'
  )

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    storedFavourites
  )

  useEffect(() => {
    localStorage.setItem(
      'favourites',
      JSON.stringify(favourites)
    )
  }, [favourites])

  return (
    <FavouritesContext.Provider
      value={{ favourites, dispatch }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}