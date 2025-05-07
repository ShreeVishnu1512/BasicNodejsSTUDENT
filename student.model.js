import mongoose from "mongoose";

let studentSchema=new mongoose.Schema({
    student:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


let Student=mongoose.model("Student",studentSchema);



export default Student;


