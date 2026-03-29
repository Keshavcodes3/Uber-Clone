import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1/captains',
    withCredentials: true   // 🔥 important for cookies
})

export const registerCaptain = async ({ fullname, email, password, vehicle }) => {
    const response = await api.post('/register', {
        fullname,
        email,
        password,
        vehicle
    })
    return response.data
}

export const loginCaptain = async ({ email, password }) => {
    const response = await api.post('/login', {
        email,
        password
    })
    return response.data
}

export const logOutCaptain = async () => {
    const response = await api.post('/logout')
    return response.data
}

export const getCaptainProfile = async () => {
    const response = await api.get('/profile')
    return response.data
}