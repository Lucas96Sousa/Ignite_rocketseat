import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Request, Response } from "express";

class CreateCategoryController {
	handle(req: Request, res: Response) {
		const { name, description } = req.body;

		const createCategoryService = new CreateCategoryService(
			categoriesRepository
		);

		createCategoryService.execute({ name, description });
		return res.status(201).send();
	}
}

export { CreateCategoryController };
