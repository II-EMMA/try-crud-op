'use server'

import connectedDB from "../database"
import User from "../models/User";


export const addUserClerk = async (user) => {
    connectedDB()

    const email =  user?.emailAddresses[0].emailAddress
    const name = user?.firstName
    const age = 21

    if (!email || !name) {
        console.log("Error: Email or name not provided in user data.");
        return null; 
      }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return existingUser._id.toString();
      } 

    else {
        const newUser = await User.insertOne({
            name,
            age,
            email
        });
        console.log(`🎉 the data is successfully added`)
        return newUser._id.toString();
    }

}