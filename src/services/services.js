import axios from 'axios'

const baseURL = 'http://192.168.1.4:8080/api/'

const api = axios.create({
    baseURL,
    headers: {'Content-Type': 'application/json'}
})


export default api