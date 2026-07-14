import axios from "axios";

const AUTH_BASE_URL = import.meta.env.VITE_AUTH_BASE_URL;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

const authClient = axios.create({
  baseURL: AUTH_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const login = async (username, password) => {
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("client_id", CLIENT_ID);
    params.append("client_secret", CLIENT_SECRET);
    params.append("username", username);
    params.append("password", password);

    const response = await authClient.post("/token/", params);

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const logout = async () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return;
  }

  try {
    const params = new URLSearchParams();
    params.append("client_id", CLIENT_ID);
    params.append("client_secret", CLIENT_SECRET);
    params.append("token", token);

    await authClient.post("/revoke_token/", params);
  } catch (error) {
    console.error("Error during logout:", error);
  } finally {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
};

export const isLoggedIn = () => {
  return localStorage.getItem("access_token") !== null;
};