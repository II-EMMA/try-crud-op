'use server'
import mongoose from "mongoose"
import connectedDB from "../database"
import Product from "../models/Product"
import { addUserClerk } from "./addUserClerk"
import { currentUser } from '@clerk/nextjs/server'
// import User from "../models/User";


export const addProduct = async (label, price, subProductsData) => {
    
    await  connectedDB()
    const user = await currentUser();
    const ownerId = await addUserClerk(user);
    const ProductInfo = {
        owner: new mongoose.Types.ObjectId(ownerId),
        product_name: label,
        product_price: price,
        sub_products: subProductsData
    } 
   await Product.create(ProductInfo)

}
