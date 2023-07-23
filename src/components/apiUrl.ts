import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://restaurent-website-backend-og44.vercel.app/",
});
