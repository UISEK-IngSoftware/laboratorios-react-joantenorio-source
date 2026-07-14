import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const pokemonClient = axios.create({
  baseURL: API_BASE_URL,
});

pokemonClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchPokemonList = async () => {
  const response = await pokemonClient.get("/pokemons/");
  return response.data;
};

export const createPokemon = async (pokemonData) => {
  const response = await pokemonClient.post("/pokemons/", pokemonData);
  return response.data;
};