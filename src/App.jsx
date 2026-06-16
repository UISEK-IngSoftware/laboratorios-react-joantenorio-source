import Header from './components/Header'
import './App.css'
import PokemonList from './components/PokemonList'
import { Container } from '@mui/material'  // ← falta esto

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <PokemonList />
      </Container>  {/* ← así se cierra */}
    </>
  )
}

export default App
