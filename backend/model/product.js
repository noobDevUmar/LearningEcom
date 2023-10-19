import mongoose from 'mongoose'

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required: [true,'please enter product name']
    }, description:{
        type:String,
        required: [true,'please enter product description']
    }, price:{
        type:Number,
        required: [true,'please enter product name']
    },images:[
        {
            public_id:{
                type:String
            },
            url:{
                type:String
            }
        }
    ],
    category:{
        type:String,
        required:[true,'please enter category'],
        enum:{
            values:[
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports"
            ]
        }
    },seller:{
        type:String,
        required: [true,'please enter product seller']
    }, stock:{
        type:Number,
        required: [true,'please enter product stock']
    },ratings:{
        type:Number,
        default:0
    },
    reviews:[
        {
            rating:{
                type:Number,
                retquired:true
            }, comments:{
                type:String,
                retquired:true
            },createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
,
    createdAt:{
        type:Date,
        default:Date.now
    }
})


export default mongoose.models.Product || mongoose.model('Product',productSchema)