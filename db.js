import mongoose from "mongoose";

async function dbConnection(){
    try {
            await mongoose.connect("mongodb://127.0.0.1/StudentDB")
            console.log("database connected")
    } catch (error) {
        console.log("DB ERROR",error);
    }
}

export default  dbConnection;