import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { isAdmin } from '../middlewares/adminMiddleware.js';
import { getAllUser, deleteUser,getAllRescueRequest } from "../controllers/adminController.js";
const router = express.Router();

// Admin-only route
router.get('/users', isAdmin, getAllUser)
router.get('/users/delete/:id', isAdmin, deleteUser)
router.get("/getAllRescueRequest", isAdmin, getAllRescueRequest);

export default router;