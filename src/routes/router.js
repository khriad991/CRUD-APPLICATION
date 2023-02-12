
import express from "express"
import {AddUser, editUser, getUser, getUserById,deleteUser} from "../Controllers/UserController.js";
//router -----implement --------for API Calling
const router =  express.Router();

router.post("/add",AddUser)
router.get('/all', getUser)
router.get("/:id", getUserById)
router.post("/:id",editUser)
router.delete("/:id", deleteUser)

export default router