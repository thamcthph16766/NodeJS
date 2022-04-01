import User from '../model/user';
export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm thấy"
            })
        }
        req.profile = user;
        next();
    } catch (error) {
        
    }
}