import User from '../model/user';

export const signUp = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        res.json(user);
    }catch(error){
        res.status(400).json({
            message: "lỗi"
        })
    }
} 