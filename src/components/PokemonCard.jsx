
import  {Card, CardContent , CardMedia, Typography} from '@mui/material';
export default function PokemonCard({ pokemon }) {
  return (
    <Card>
         <CardMedia
           component="img"
           height="140"
           image={pokemon.image}
           alt={pokemon.name}
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

   )
}