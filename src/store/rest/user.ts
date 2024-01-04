import axios from 'axios';

const API_BASE_URL = 'https://evg0nr41jf.execute-api.eu-north-1.amazonaws.com/test/v1'

const getToken = () => {
  return localStorage.getItem('token')
}

const axiosConfig = {
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
}

const login = ({ email, password }) => {
  const requestAxios = axios.post(`${API_BASE_URL}/auth/login`, { email, password })
    .then((data) => data)
    .catch((error) => console.log(error))

  return requestAxios
}

const getUser = () => {
  const requestAxios = axios.get(`${API_BASE_URL}/auth/me`, axiosConfig)
    .then((data) => data)
    .catch((error) => console.log(error))

  return requestAxios
}

export const userAPI = {
  login,
  getUser,
}
