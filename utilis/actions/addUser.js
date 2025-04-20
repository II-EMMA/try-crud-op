'use server'
import connectedDB from "../database"
import User from "../models/User"

export const addUser = async () => {
    await  connectedDB()
    const UserInfo = {
        name: 'EMMA',
        age: 21,
        email: 'EMMA@gmail.com'
    } 
   await User.create(UserInfo)
//    const UsersInfo = await User.find({}).lean();
//    const AllUsers = UsersInfo.map(user => convertToSerializableObject(user))
//    return AllUsers;
}
