import express from 'express'
import mongoose from 'mongoose'
import student from "./routers/student.router.js"
import dbConnection from './config/db.js';
import Student from './models/student.model.js'
import router from './routers/student.router.js';

dbConnection();

let app=express();

app.use(express.json());

app.use("/api/v1/students",router);

export default app;