import { Router } from "express";
import { createCategoryController } from "../modules/cars/use-cases/createCategory";
import { listCategoriesController } from "../modules/cars/use-cases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
	return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
	return listCategoriesController.handle(req, res);
});

export default categoriesRoutes;
