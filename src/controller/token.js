import { generateToken, verifyToken } from "../helper/jwtHelper.js"

export const getTokenController = (req, res) => {
    const { data } = req.body
    try {
        const token = generateToken(data)
        return res.status(200).json({
            token: token,
        })
    } catch (error) {
        console.log(`error getTokenController: `, error)
        return res.status(200).json({
            error: error,
        })
    }
}

export const verifyTokenController = (req, res) => {
    const token = req.body.token || req.headers["x-access-token"] || req.query.token
    console.log(`token`, token)
    try {
        const decode = verifyToken(token)
        if(decode)
        return res.status(200).json({
            data: decode,
        })
    } catch (error) {
        console.log(`error verifyTokenController: `, error)
        return res.status(200).json({
            error: error,
        })
    }
}