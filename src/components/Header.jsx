import { AppBar, Container, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import pokedexLogo from "../assets/pokedex-logo.jpg";
import "./Header.css";
import { isLoggedIn, logout } from "../services/authService";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    window.location.reload(); // Actualiza el Header para mostrar "Iniciar Sesión"
  };

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
          </Toolbar>

          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              Inicio
            </Button>

            <Button color="inherit" component={Link} to="/add">
              Agregar Pokémon
            </Button>

            {isLoggedIn() ? (
              <Button color="inherit" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Iniciar Sesión
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}