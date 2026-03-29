import blacklistTokenModel from "../Models/blacklistToken.model";
import userModel from "../Models/user.model";
import jwt from 'jsonwebtoken'

const IdentifyUSer = async (req, res, next) => {
    const { token } = req.cookies
    if (!token) {
        return res.status(401).json({
            message: "No token provided",
            success: false
        });
    }
    const isBlacklisted = await blacklistTokenModel.findOne({ token })
    if (isBlacklisted) {
        return res.status(401).json({
            message: "Unauthrized access",
            success: false,
            err: "Trying to fetch profile of a blacklisted token"
        })
    }
    let decoded;
    try {
        decoded = await jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token",
            success: false
        });

    }
    req.user = decoded;
    next()
}

export default IdentifyUSer