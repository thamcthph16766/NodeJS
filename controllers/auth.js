import { json } from 'express/lib/response';
import User from '../model/user';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const {name, password, email} =req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "Email đã tồn tại"
            })
        };
        const user = await new User(req.body).save();
        res.json({
            user:{
                _id:user._id,
                name:user.name,
                email: user.email
            }
        });
    } catch (error) {
    }
} 

export const signin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "sai mật khẩu"
            })
        }
        
        const token = jwt.sign({_id: user._id}, "abc", {expiresIn: 60 * 60});
        res.json({
            token, 
            user: {
                _id: user._id,
                name: user.name,
                email:user.email,
                role:user.role
            }
        })
    } catch (error) {
        
    }
}