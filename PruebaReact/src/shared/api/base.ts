import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
})

api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  config.headers['X-App-Id'] = 'my-form-app'           
  const lang = localStorage.getItem('lang') || 'es-MX' 
  config.headers['Accept-Language'] = lang
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error('[API ERROR]', err?.response?.status, err?.message)
    return Promise.reject(err)
  }
)
