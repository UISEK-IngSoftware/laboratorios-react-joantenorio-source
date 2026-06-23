import { Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { fetchPokemonList } from '../services/pokemonServices'

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetchPokemonList()
            .then((data) => {
                console.log("Datos recibidos:", data)

                if (Array.isArray(data)) {
                    setPokemons(data)
                } else if (Array.isArray(data.results)) {
                    setPokemons(data.results)
                } else {
                    console.error("Formato inesperado:", data)
                    setPokemons([])
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <Grid container spacing={2}>
            {pokemons.map((pokemonItem) => (
                <Grid key={pokemonItem.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <PokemonCard pokemon={pokemonItem} />
                </Grid>
            ))}
        </Grid>
    )
}