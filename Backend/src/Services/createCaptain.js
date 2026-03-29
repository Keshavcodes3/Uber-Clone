import captainModel from "../Models/captain.model";

const createCaptain = async ({ fullname, email, password, vehicle }) => {
    return await captainModel.create({
        fullname, email, password, vehicle
    })
}

export default createCaptain