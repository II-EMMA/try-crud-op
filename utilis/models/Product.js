import mongoose from "mongoose";
const { Schema, models, model } = mongoose;


const SubProductSchema = new Schema({
    label: String,
    checked: {
       type: Boolean ,
        default:false
      },
  });

const ProductSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, // Correct reference to Schema.Types.ObjectId
    ref: 'User',
    required: true,
},
     product_name: {
        type: String,
     },
     product_price: {
        type: Number,
     },
     sub_products: [SubProductSchema]
        
},{ timestamps: true })

const Product = models.Product || model('Product', ProductSchema)

export default Product;