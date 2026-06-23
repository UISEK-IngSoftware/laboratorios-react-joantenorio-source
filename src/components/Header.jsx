import { AppBar, Container, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import pokedexLogo from '../assets/pokedex-logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <Container>
      <div className="pokedex-navbar">
        <AppBar position="static">
          <Toolbar>
            <div className="img-container">
              <img
                src={pokedexLogo}
                alt="Pokedex Logo"
                height="150"
              />
            </div>

            <Button
              color="inherit"
              component={Link}
              to="/"
            >
              Lista Pokémon
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/add"
            >
              Agregar Pokémon
            </Button>

          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}