import axios from 'axios'
import router from '@/router'

const baseURL = 'http://192.168.1.24:8080/api/'

const api = axios.create({
    baseURL,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
}, error => {
    return Promise.reject(error)
})

api.interceptors.response.use(config => config, error => {
    if(error?.response?.status === 401) {
        router.push('/login')
        localStorage.removeItem('token')
    }

    return Promise.reject(error)
})



export default api