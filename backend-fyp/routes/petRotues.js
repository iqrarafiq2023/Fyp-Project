import express from "express";
import {deletePetInfo,update, create, getByCategory, getOne, getAll} from "../controllers/petsController";
import fs from 'fs';
import multer from "multer";

import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/images")) {
      fs.mkdirSync("public/images");
    }

    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".png" && ext !== ".jpeg" && ext !== ".jpg") {
      return cb(new Error("Only videos are allowed!"));
    }

    cb(null, true);
  },
});

const router = express.Router();

//get all pets
router.get("/all", getAll);

router.get("/get/:id", getOne);

router.get("/category/:categoryId",getByCategory);

//post create pet
router.post(
  "/create",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "additionalImages",
      maxCount: 5,
    },
  ]),
  create
);

//post create pet
router.put(
  "/update/:id",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "additionalImages",
      maxCount: 5,
    },
  ]),
  update
);

router.delete("/delete/:id", deletePetInfo);

export default router;
