import mongoose from "mongoose";

let connected = false;


const connectedDB = async () => {
    
    mongoose.set('strictQuery', true);

    if(connected){
        console.log('🎉 Already connected to the database.');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('Connected to the database.');
    } catch(err){
        console.log('Error connecting to the database:', err.message);
    }
}
export default connectedDB