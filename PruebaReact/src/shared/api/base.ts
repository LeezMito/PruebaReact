import axios from 'axios'

export const api = axios.create({
})

api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err)
  }
)
