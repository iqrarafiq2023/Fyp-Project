import express from "express";
import {deleteAdoption,getAll, create, update} from '../controllers/adoptionController.js'

const router = express.Router();

//get all media
router.get("/all", getAll);

//post create new media
router.post("/create", create);

export default router;
