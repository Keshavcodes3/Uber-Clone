import mongoose from 'mongoose'
import express from 'express'
import cookie from 'cookie-parser'
import cors from 'cors'
const App=express()
App.use(express.json())
App.use(cookie())
App.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))


import userRoutes from './Routes/user.routes'
import captainRoutes from './Routes/captain.routes'
App.use('/api/v1/users',userRoutes)
App.use('/api/v1/captains',captainRoutes)
export default App