import { Router } from "express";

import {CreateCategoryController} from '../modules/cars/use-cases/createCategory/CreateCategoryController'
import { listCategoriesController } from "../modules/cars/use-cases/listCategories";
import multer from "multer";
import { importCategoryController } from "../modules/cars/use-cases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
	dest: "./tmp",
});

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
	return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
	return importCategoryController.handle(req, res);
});

export default categoriesRoutes;
