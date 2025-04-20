'use server';
import connectedDB from "../database";
import Product from "../models/Product";
import { currentUser } from '@clerk/nextjs/server'
import { addUserClerk } from "./addUserClerk"; // Adjust the import path
import mongoose from "mongoose";
import { convertToObject } from "./convertIntoObject";

export const getTheProduct = async (id) => {
  await connectedDB();
  const userId = await currentUser();
  const UserId = await addUserClerk(userId); 
  if (UserId) {
    const productData = await Product.findOne({
        _id: id,
        owner: new mongoose.Types.ObjectId(UserId),
      }).lean();
    if (productData) {
      return convertToObject(productData);
    } else {
      return [];
    }
  } else {
    console.error("Error: Could not retrieve UserId.");
    return [];
  }
};