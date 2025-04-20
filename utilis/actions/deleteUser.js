'use server'

import connectedDB from "../database"
import User from "../models/User";
import { ObjectId } from 'mongodb';

export const deleteUser = async (id) => {
    await connectedDB()
    await User.deleteOne({ _id: new ObjectId(id) });
}  