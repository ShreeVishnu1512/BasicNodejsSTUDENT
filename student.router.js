import express from "express";


import { createStudent, deleteStudent, findStudent, findStudents, updateStudent } from "../controllers/student.controller.js";

let router=express.Router();


router.post("/", createStudent);
router.get("/", findStudents);
router.get("/:id", findStudent);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);



export default router;