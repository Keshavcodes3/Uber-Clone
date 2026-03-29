import userModel from "../Models/user.model";
import mongoose from "mongoose";
import { createUser } from "../Services/createUser";
import blacklistTokenModel from "../Models/blacklistToken.model";

export const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        //~check for existance
        
        const isAlreadyExist = await userModel.findOne({ email })
        if (isAlreadyExist) {
            return res.status(400).json({
                message: "User already exist with the credential",
                success: false,
                error: "Already exist with email"
            })
        }
        const user = await createUser({ fullname, email, password })
        const userObj = user.toObject()
        delete userObj.password
        const token = user.generateAuthToken()
        res.cookie('token', token)
        return res.status(201).json({
            message: "User created successfully",
            success: true,
            user: userObj,
            token
        })

    } catch (err) {
        return res.status(400).json({
            message: "Internal server Error",
            success: false,
            error: err.message
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }
        const user = await userModel.findOne({ email }).select('+password')
        if (!user) {
            return res.status(404).json({
                message: "user not found",
                success: false,
                error: "User does not exist"
            })
        }
        const validPassword = await user.comparePassword(password)
        if (!validPassword) {
            return res.status(401).json({
                message: "Invalid Credential",
                error: "Password mismatched",
                success: false
            })
        }

        const token = await user.generateAuthToken()
        res.cookie('token', token)
        const userObj = user.toObject()
        delete userObj.password
        return res.status(200).json({
            message: "User logged in successfully",
            success: true,
            user: userObj,
            token
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err.message
        })
    }
}

export const getProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await userModel.findById(userId)
        const userObj = user.toObject()
        delete userObj.password
        return res.status(200).json({
            message: "User profile fethced successfully",
            success: true,
            user: userObj
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message,
            success: false

        })
    }
}


export const logoutUser = async (req, res) => {
    try {
        const token = req.cookies.token;
        await blacklistTokenModel.create({ token })
        res.clearCookie('token')
        return res.status(200).json({
            message: "Logged out successfully",
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message,
            success: false

        })
    }
}