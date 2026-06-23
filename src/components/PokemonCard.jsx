import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function PokemonCard({ pokemon }) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={`http://localhost:8000/media/${pokemon.picture}`}
        alt={pokemon.name}
        sx={{
          height: 220,
          objectFit: 'contain'
        }}
      />

      <CardContent>
        <Typography variant="h5" component="div">
          {pokemon.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Type: {pokemon.type}
        </Typography>
      </CardContent>
    </Card>
  );
}