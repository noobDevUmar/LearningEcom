import Product from "../model/product";
import ApiFilter from "../utils/ApiFilter";

export const newProduct = async(req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(200).json({
        product,
    })
}

export const getAllPoducts = async(req,res,next)=>{

    const api = new ApiFilter(Product.find(),req.query)
    .search()
    .filter()
    
    

    const products = await api.query
    res.status(200).json({
        products,
    })
}

export const getSingleProduct = async(req,res,next)=>{
    const product = await Product.findById(req.query.id)
    if(!product){
        res.status(404).json({
            error:'product not found'
        })
    }

    res.status(200).json({
        product,
    })
}