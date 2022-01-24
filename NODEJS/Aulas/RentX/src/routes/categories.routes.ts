import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from '../modules/cars/use-cases/createCategory/CreateCategoryController'
import { ListCategoriesController } from "../modules/cars/use-cases/listCategories/ListCategoriesController";
import { ImportCategoryController } from "../modules/cars/use-cases/importCategory/ImportCategoryController";

const categoriesRoutes = Router();

const upload = multer({
	dest: "./tmp",
});

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);


categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export  {categoriesRoutes};
