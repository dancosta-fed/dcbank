import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  // headers: {} -> Um cabeçalho ou token de autenticação. Caso precise.
})