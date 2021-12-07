import axios from "axios"

export const plugin = axios.create({
  baseURL: 'http://localhost:5554'
})
