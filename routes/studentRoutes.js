import express from "express"
import studentController from "../controllers/studentController.js"
const route= express.Router();


route.post("/student/create",studentController.createNewStudent);
route.get("/student/list",studentController.getAllStudents)
route.get("/student/:id",studentController.getStudentById)
route.get("/student/f/:email",studentController.getStudentByEmail)
route.put("/student/updateStudent/:id",studentController.updateStudent);
route.delete("/student/l/:id",studentController.deleteStudent)

export default route;
