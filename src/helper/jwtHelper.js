import jwt from "jsonwebtoken";

export const generateToken = (userData) => {
    try {
        const token = jwt.sign({ data: userData }, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: '10s' })
        // console.log(`token`, token)
        return token
    } catch (error) {
        console.log(`error generateToken: `, error)
        throw error
    }
}
export const verifyToken = (token) => {
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY)
        // console.log(`data`, data)
        return data
    } catch (error) {
        console.log(`error verifyToken: `, error)
        throw error
    }
}