import captainModel from "../Models/captain.model";
import createCaptain from "../Services/createCaptain";


export const registerCaptain = async (req, res) => {
    try {
        const { fullname, password, email, vehicle } = req.body
        const alreadyExist = await captainModel.findOne({ email })
        if (alreadyExist) {
            return res.status(401).json({
                message: "Already exist with email",
                success: false,
                error: 'User exists'
            })
        }
        const captain = await createCaptain({ fullname, email, password, vehicle })
        const captainObj = captain.toObject()
        delete captainObj.password
        const token = captain.generateAuthToken()
        res.cookie('token', token)
        return res.status(200).json({
            message: "Captain created successfully",
            captain: captainObj,
            success: true
        })
    } catch (err) {
        return res.status(409).json({
            message: "Something went wrong",
            success: false,
            error: err.message
        })

    }
}

export const loginCaptain = async (req, res) => {
    try {
        const { password, email } = req.body
        const captain = await captainModel.findOne({ email }).select('+password')
        if (!captain) {
            return res.status(401).json({
                message: "No user found",
                success: false,
                error: 'User do not exist'
            })
        }
        const validPassword=await captain.comparePassword(password)
        if(!validPassword){
            return res.status(401).json({
                message:"Invalid credentials",
                success:false,
                error:"Invalid password"
            })
        }
        const captainObj = captain.toObject()
        delete captainObj.password
        const token = captain.generateAuthToken()
        res.cookie('token', token)
        return res.status(200).json({
            message: "Captain logged in successfully",
            captain: captainObj,
            success: true
        })
    } catch (err) {
        return res.status(409).json({
            message: "Something went wrong",
            success: false,
            error: err.message
        })

    }
}

export const logOutCaptain=async(req,res)=>{
    try{
        const userId=req.user._id;
        const user=await captainModel.findById(userId)
        if(!user){
            return res.status(404).json({
                message:"User not found",
                success:false,
            })
        }
        res.clearCookie('token')
        return res.status(200).json({
            message:"User logged out succesfully",
            success:true
        })
    }catch(err){
        return res.status(409).json({
            message: "Something went wrong",
            success: false,
            error: err.message
        })
    }
}

export const getCaptain=async(req,res)=>{
    try{
        const captainId=req.user._id;
        const captain=await captainModel.findById(captainId)
        const captainObj=captain.toObject()
        delete captainObj.password
        return res.status(200).json({
            message:"Captain profile fetched successfully",
            success:true,
            captain:captainObj
        })
        
    }catch(err){
        return res.status(409).json({
            message: "Something went wrong",
            success: false,
            error: err.message
        })
    }
}