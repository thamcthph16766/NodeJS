import User from '../model/user';

export const signin = async (req, res) => {
    const {name, password, email} =req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "Email đã tồn tại"
            })
        };
        const user = await new User(req.body);
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
