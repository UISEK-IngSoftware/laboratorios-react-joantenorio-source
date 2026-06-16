import { AppBar, Container, Toolbar } from "@mui/material";
import pokedexLogo from '../assets/pokedex-logo.jpg'
import './Header.css'

export default function Header() {
  return(
    <Container>
      <div className="pokedex-navbar">
        <AppBar position="static">
            <Toolbar>
                <div className="img-container">
                    <img src={pokedexLogo} alt="Pokedex Logo" height="150" />
                </div>
            </Toolbar>
        </AppBar>
      </div>
    </Container>
  )
}