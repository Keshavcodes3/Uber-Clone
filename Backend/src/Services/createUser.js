import userModel from "../Models/user.model";

export const createUser=async({fullname,email,password})=>{
    return await userModel.create({
        fullname,email,password
    })
}