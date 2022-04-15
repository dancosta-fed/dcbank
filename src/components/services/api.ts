import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://localhost:3000/api', // development
  baseURL: 'https://dancosta-fed.github.io/dcbank/', // production
  
  // headers: {} -> Um cabeçalho ou token de autenticação. Caso precise.
})