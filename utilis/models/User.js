import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true
    },
    
},{ timestamps: true })

const User = models.User || model('User', UserSchema)

export default User;