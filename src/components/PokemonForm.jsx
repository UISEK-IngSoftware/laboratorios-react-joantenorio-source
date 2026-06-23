import { Box, TextField, Typography, Button } from "@mui/material";
import "./PokemonForm.css";

export default function PokemonForm() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Formulario de Pokémon
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Tipo"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Peso"
          variant="outlined"
          type="number"
          fullWidth
        />

        <TextField
          label="Altura"
          variant="outlined"
          type="number"
          fullWidth
        />

        <Button variant="contained" type="submit">
          Guardar Pokémon
        </Button>
      </Box>
    </>
  );
}