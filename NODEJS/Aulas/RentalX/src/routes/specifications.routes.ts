import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../service/CreateSpecificationService";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (req, res) => {
	const { name, description } = req.body;
	const createSpecificationService = new CreateSpecificationService(
		specificationsRepository
	);

	createSpecificationService.execute({ name, description });

	return res.status(201).send();
});

export default specificationRoutes;
