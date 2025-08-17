import { Router } from "express";
import { createUsers, deleteUserById, getUsers, getUsersById, updateUsers } from "../controllers/users.controllers.js";
const router = Router();

router.get('/users', getUsers)

router.get('/users/:id',getUsersById)

router.delete('/users/:id', deleteUserById)

router.post('/users/',createUsers )


router.put('/users/:id', updateUsers)

export default router;