import express from 'express'
import { getProfile, loginUser, logoutUser, registerUser } from '../Controllers/user.controller'
import IdentifyUSer from '../Middlewares/user.middleware'
import { loginUserValidator, registerUserValidator } from '../Validators/user.validator'
import validate from '../Middlewares/validate'

const userRoutes=express.Router()


userRoutes.post('/register',registerUserValidator,validate,registerUser)
userRoutes.post('/login',loginUserValidator,validate,loginUser)
userRoutes.post('/logout',IdentifyUSer,logoutUser)
userRoutes.get('/profile',IdentifyUSer,getProfile)


export default userRoutes