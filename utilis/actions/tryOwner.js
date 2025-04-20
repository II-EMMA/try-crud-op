'use server'
import connectedDB from "../database"
import Product from "../models/Product"
// import User from "../models/User"


export const tryOwner = async () => {
    
    await  connectedDB()
    const products = await Product.find({}).populate('owner')
    if (products && products.length > 0) {
        products.forEach(product => {
          console.log('Product:', product.product_name);
          console.log('Owner:', product.owner); 
        });
}
}