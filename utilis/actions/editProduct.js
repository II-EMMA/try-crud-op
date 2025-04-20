'use server'
import mongoose from "mongoose"
import connectedDB from "../database"
import Product from "../models/Product"
import { addUserClerk } from "./addUserClerk"
import { currentUser } from '@clerk/nextjs/server'
import { convertToObject } from "./convertIntoObject"
// import User from "../models/User";


export const editProduct = async (label, price, subProductsData ,id) => {
    
    await  connectedDB()
    const user = await currentUser();
    const ownerId = await addUserClerk(user);
    const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: id,
          owner: new mongoose.Types.ObjectId(ownerId),
        },
        {
          product_name: label,
          product_price: price,
          sub_products: subProductsData,
          updatedAt: new Date(), // Optionally update the timestamp
        },
        { new: true, runValidators: true } // Options to return the updated document and run schema validators
      );
    return convertToObject(updatedProduct);
}
