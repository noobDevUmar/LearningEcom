import ProductDetails from '@/components/products/ProductDetails'
import axios from 'axios'
import React from 'react'


const getProductDetails = async(id)=>{

    const {data}= await axios.get(`${process.env.Api_URL}/api/product/${id}`)
    return data?.product
}


const ProductDetailsPage =async ({params}) => {
const product = await getProductDetails(params.id)

    
  return (
    <div>
        <ProductDetails product={product}/>
    </div>
  )
}

export default ProductDetailsPage