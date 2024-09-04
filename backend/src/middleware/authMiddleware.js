import jwt from 'jsonwebtoken';
import User from '../models';
import { restart } from 'nodemon';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: `Unauthorized, no toekn provided`})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id);
        next()
    } catch (error) {
        restart.status(401).json({message: `Unauthorized, invalid token`})
    }
};

export default authMiddleware;