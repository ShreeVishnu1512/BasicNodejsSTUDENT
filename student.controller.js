
import Student from "../models/student.model.js";

let createStudent=async(req,res,next)=>{
    try {
        let {student, course}=req.body;
        // let {course}=req.body;
        let newStudent = await Student.create({ student: student, course: course });

       res.status(201).send(newStudent)
       console.log(newStudent)
    } catch (error) {
        res.status(400),res.send(error)
    }
}

 let findStudents=async(req,res,next)=>{
    try {
        let students=await Student.find()
        res.status(201).send(students)
    } catch (error) {
        res.status(400).send(error)
    }
}

let findStudent=async(req,res,next)=>{
    try {
        let {id}=req.params;
        let student=await Student.findById(id);
        res.status(201).send(student)
    } catch (error) {
        res.status(400).send(error)
    }
}

let deleteStudent=async(req,res,next)=>{
    try
    {
        let {id}=req.params;
        let student=await Student.findByIdAndDelete(id);
        res.status(201).send("data is deleted")
    }
    catch(error){
        res.status(400).send(error)
    }
}

let updateStudent=async(req,res,next)=>{
    try
    {
        let {id}=req.params
        let {isCompleted}=req.body
        const updateStudent = await Student.findByIdAndUpdate(
            id,
            { isCompleted: isCompleted },
            { new: true } // return updated doc
        );
        res.status(201).send(updateStudent); 
    }
    catch(error){
        res.status(400).send(error)
    }
};


export  {
    findStudent,findStudents,createStudent,updateStudent,deleteStudent
}

