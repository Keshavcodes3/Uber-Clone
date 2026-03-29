import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1/users',
    withCredentials: true
})


export const registerUser = async ({ fullname, email, password }) => {

    const response = await api.post('/register', { fullname, email, password })
    return response.data
}


export const loginUser=async({email,password})=>{
    const response=await api.post('/login',{email,password})
    return response.data
}


export const logOutUser=async()=>{
    const response=await api.post('/logout')
    return response.data
}

export const getProfile=async()=>{
    const response=await api.get('/profile')
    return response.data
}