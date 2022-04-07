import expressJWT from 'express-jwt'
export const checkAuth = (req, res, next) => {
    const status = true;
    if (status){
        next();
    }else{
        console.log("Lỗi");
    };
};

export const requireSignin = expressJWT({
    algorithms: ["HS256"],
    secret: "abc",
    requestProperty: "auth" 
});

export const isAuth = (req, res, next) =>{
    console.log ('req.profile', req.profile);
    console.log ('req.auth', req.auth);

    const status = req.profile._id == req.auth._id
    if(!status){
        res.status(400).json({
        message: "Không có quyền truy cập"
        })
    }
    next();
}
export const isAdmin = (req, res, next) =>{
    if(req.profile.role === 0){
        res.status(401).json({
            message: "Không phải admin"
        })
    }
    next();
}