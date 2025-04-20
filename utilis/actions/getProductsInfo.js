'use server';
import connectedDB from "../database";
import Product from "../models/Product";
import { currentUser } from '@clerk/nextjs/server'
import { addUserClerk } from "./addUserClerk"; // Adjust the import path
import mongoose from "mongoose";
import { convertToObject } from "./convertIntoObject";

export const getProductsData = async () => {
  await connectedDB();
  const userId = await currentUser();
  const UserId = await addUserClerk(userId); // Await the result of addUserClerk()
  if (UserId) {
    const productsInfo = await Product.find({ owner: new mongoose.Types.ObjectId(UserId) }).lean();
    if (productsInfo.length !== 0) {
      const productsData = productsInfo.map(product => convertToObject(product));
      return productsData;
    } else {
      return [];
    }
  } else {
    console.error("Error: Could not retrieve UserId.");
    return [];
  }
};