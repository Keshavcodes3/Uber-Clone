import express from 'express'
import { registerCaptain,loginCaptain, logOutCaptain,getCaptain} from '../Controllers/captain.controller'
import IdentifyUSer from '../Middlewares/user.middleware'
import { loginCaptainValidator, registerCaptainValidator } from '../Validators/captain.validator'
import validate from '../Middlewares/validate'

const captainRoutes=express.Router()


captainRoutes.post('/register',registerCaptainValidator,validate,registerCaptain)
captainRoutes.post('/login',loginCaptainValidator,validate,loginCaptain)
captainRoutes.post('/logout',IdentifyUSer,logOutCaptain)
captainRoutes.get('/profile',IdentifyUSer,getCaptain)


export default captainRoutes