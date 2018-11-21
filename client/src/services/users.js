import api from '../providers/fetchClient'

export const getUsers = () =>
  api.get(`/users`)
