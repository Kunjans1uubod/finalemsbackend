import express from "express";
import { getAllUsers } from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuth.js";

const adminRouter = express.Router();

adminRouter.get("/users", adminAuth, getAllUsers);

export default adminRouter;
