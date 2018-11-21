import api from '../providers/fetchClient'

export const getAllTasks = () =>
  api.get(`/todos`)

export const createTask = (input) =>
  api.post(`/todos`, { task: input })

export const deleteTask = (id) =>
  api.delete(`/todos/${id}`)
