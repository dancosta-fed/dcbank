import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://localhost:3000/api', // development
  baseURL: 'https://dcbank-oaf25szzy-dancosta-fed.vercel.app/', // production
  
})