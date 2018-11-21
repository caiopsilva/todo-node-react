import api from '../providers/fetchClient'
/* global localStorage */
export const getToken = () => localStorage.getItem('token')

export const setToken = token => localStorage.setItem('token', token)

export const logout = () => localStorage.removeItem('token')

export const getUserByToken = () => api.get('/me')

export const login = (email, password) =>
  api.post('/users/login', { email, password })
