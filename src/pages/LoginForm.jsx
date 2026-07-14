import { Box, Typography, TextField, Button } from "@mui/material";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/authService";

export default function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    login(username, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
        console.error("Error during login:", error);
      });
  };

  return (
    <Box component="form" className="login-form" onSubmit={handleLogin}>
      <Typography variant="h4" gutterBottom>
        Inicio de Sesión
      </Typography>

      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}

      <TextField
        label="Usuario"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Box>
  );
}