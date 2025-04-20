'use server'

import connectedDB from "../database"
import Product from "../models/Product";
import { ObjectId } from 'mongodb';

export const deleteProduct = async (id) => {
    await connectedDB()
    await Product.deleteOne({ _id: new ObjectId(id) });
}  