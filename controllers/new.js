import mongoose from "mongoose";
const news = [
    {id: 1, name: "New 1", desc: "Mô tả 1", price: 100},
    {id: 2, name: "New 2", desc: "Mô tả 2", price: 200}
];

const New = mongoose.model('new', {name: String});

//list
export const read = async (req, res) => {
    try{
        const news = await New.find();  
        res.json(news);
    }catch(error){
        res.status(400).json({
            message: "lỗi"
        })
    }
}

export const list = async (req, res) => {
    try{
        const news = await Product.find();
        res.json(news);
    }catch(error){
        res.status(400).json({
            message: "lỗi"
        })
    }
}

//thêm
export const create = async (req, res) => {
    try {
        const New = await New(req.body).save();
        res.json(news);
    }catch (error){
        res.status(400).json({
            message: "lỗi"
        })
    }
}

//xóa
export const remove = async (req, res) => {
    try{
        const news = await New.findOneAndDelete({ _id: req.params.id}).exec()
        res.json(news)
    }catch(error){
        res.status(400).json({
            message: "Không xóa được"
        })
    }
}

//cập nhật
export const update = async (req, res) => {
    const condition = { _id:req.params.id};
    const update = req.body;
    const option = {new: true};
    try{
        const news = await New.findByIdAndUpdate(condition, update, option);
        res.json(news)
    }catch(error){
        res.status(400).json({
            message: "Không sửa được"
        })
    }
}