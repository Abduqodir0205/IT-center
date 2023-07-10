import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const baseURL = 'http://192.168.1.4:8080/api/'

const api = axios.create({
    baseURL,
    headers: {'Content-Type': 'application/json'}
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token) config.headers.Authorization = `Bearer ${token}`
}, error => {
    return Promise.reject(error)
})

api.interceptors.response.use(config => config, error => {
    if(error?.response?.data?.status === 401) {
        router.push('login')
        localStorage.removeItem('token')
    }
})



export default api