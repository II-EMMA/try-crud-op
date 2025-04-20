'use server'
import { convertToSerializableObject } from "../convertToObject";
import connectedDB from "../database";
import User from "../models/User";

export const getUsersData = async () => {
    await  connectedDB()
    const UsersInfo = await User.find({}).lean();
    if(UsersInfo.length !== 0){
        const AllUsers = UsersInfo.map(user => convertToSerializableObject(user))
         return AllUsers;
    }
    else{
         return []
    }
 }