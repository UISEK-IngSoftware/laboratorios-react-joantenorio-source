import Header from './components/Header'
import './App.css'
import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PokemonList from './components/PokemonList'
import PokemonForm from './components/PokemonForm'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/add" element={<PokemonForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App