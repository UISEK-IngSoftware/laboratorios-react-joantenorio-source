import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log("BASE_URL =", BASE_URL);

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPokemonList = async () => {
  console.log("Consultando:", `${BASE_URL}/pokemons/`);

  const response = await apiClient.get('/pokemons/');

  console.log("Respuesta:", response.data);

  return response.data;
};