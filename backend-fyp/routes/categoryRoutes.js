import express from "express";
import {getAll,create, update, deleteCategory} from '../controllers/categoryController.js'

const router = express.Router();

//get all media
router.get("/all", getAll);

//post create new media
router.post("/create", create);

//post create new media
router.put("/update/:id", update);

router.delete("/delete/:id", deleteCategory);

export default router;
