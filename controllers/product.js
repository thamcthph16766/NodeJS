import Product from '../model/product';


//list
export const read = async (req, res) => {
    const filter = {_id: req.params.id}
    try{
        const products = await Product.findOne(filter );
        res.json(products);
    }catch(error){
        res.status(400).json({
            message: "lỗi"
        })
    }
}

export const list = async (req, res) => {
    try{
        const products = await Product.find().sort({create: -1});
        res.json(products);
    }catch(error){
        res.status(400).json({
            message: "lỗi hiển thị"
        })
    }
}

//thêm
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    }catch (error){
        res.status(400).json({
            message: "lỗi thêm",
        })
        console.log(error);
    }
}

//xóa
export const remove = async (req, res) => {
    try{
        const products = await Product.findOneAndDelete({ _id: req.params.id}).exec()
        res.json({
            message: "Đã xóa",
            data: products
        })
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
        const products = await Product.findByIdAndUpdate(condition, update, option);
        res.json(products)
    }catch(error){
        res.status(400).json({
            message: "Không sửa được"
        })
    }
}