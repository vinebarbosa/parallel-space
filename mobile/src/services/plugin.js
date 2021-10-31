import axios from 'axios'

const plugin = axios.create({
  baseURL: 'http://192.168.0.104:5555'
})

export default plugin
