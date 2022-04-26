import axios from 'axios'

export const deleteProject = async (id) => {
  return axios({
    method: 'delete',
    url: '/api/data',
    data: {id}
  })
}

export const updateProject = async (body) => {
  return axios({
    method: 'put',
    url: '/api/data',
    data: body
  })
}

export const getProjects = async () => {
  return axios({
    method: 'get',
    url: '/api/data'
  })
}

export const addProject = async (body) => {
  return axios({
    method: 'post',
    url: 'api/data',
    data: body
  })
}

