import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CountryPage from './pages/CountryPage'
import './styles/App.css'
import Favourites from './pages/Favourites'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/country/:code"
            element={<CountryPage />}
          />

          <Route
            path="/favourites"
            element={<Favourites />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App