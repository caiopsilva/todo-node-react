import axios from 'axios'
import { getToken } from '../services/auth'

export const API =
  process.env.API_URL || 'http://localhost:3000/v1'

const fetchClient = () => {
  const defaultOpctions = {
    baseURL: API
  }

  let instance = axios.create(defaultOpctions)

  instance.interceptors.request.use(config => {
    const token = getToken()
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    error => {
      if (error.response.status === 401) {
        window.location.href = '/login'
      } else {
        return Promise.reject(error)
      }
    }
  )
  return instance
}

export default fetchClient()
