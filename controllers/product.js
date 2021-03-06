import Product from '../model/product';


//list
export const read = async (req, res) => {
    const filter = {_id: req.params.id}
    try{
        const products = await Product.findOne(filter );
        res.json(products);
    }catch(error){
        res.status(400).json({
            message: "lỗi hiển thị 1 sản phẩm "
        })
        
        console.log(error);
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
            message: "Không thêm được",
        })
        console.log(error);
    }
}

//xóa
export const remove = async (req, res) => {
    try{
        const products = await Product.findOneAndDelete({ _id: req.params.id}).exec()
        res.json({
            message: "Đã xóa thành công",
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

//search
export const search = async( req, res) =>{
    const searchString = req.query.q
    try {
        const product = await Product.find({$text: {$search: searchString}})
        res.json(product)
    } catch (error) {
        console.log(error)
    }
}

export const paging = async (req, res) => {
    const pageOptions = {
        page: parseInt(req.query.page),
        limit: parseInt(req.query.limit)
    }
    try {
        const product = await Product.find()
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
            .exec();
            res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Lỗi phân trang" })
        console.log(error);
    }
}
export const priceFilter = async (req, res) => {
    const priceOptions = {
        min: parseInt(req.query.min),
        max: parseInt(req.query.max)
    }
    try {
        const product = await Product.find({ price: { $gte:priceOptions.min, $lte:priceOptions.max} });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Lỗi lọc theo giá" })
        console.log(error);
    }
} 