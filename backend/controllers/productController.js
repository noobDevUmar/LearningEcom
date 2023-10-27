import Product from "../model/product";
import ApiFilter from "../utils/APIFilter";

export const newProduct = async(req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(200).json({
        product,
    })
}

export const getAllPoducts = async(req,res,next)=>{

    const resPerPage = 3;
    const productsCount = await Product.countDocuments();
  
    const apiFilters = new ApiFilter(Product.find(), req.query)
      .search()
      .filter();
  
    let products = await apiFilters.query;
    const filteredProductsCount = products.length;
  
    apiFilters.pagination(resPerPage);
  
    products = await apiFilters.query.clone();
  
    res.status(200).json({
      productsCount,
      resPerPage,
      filteredProductsCount,
      products,
    });
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