import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCases";

const specificationsRepository = new SpecificationsRepository();
const createSpecifcationUseCase = new CreateSpecificationUseCase(
	specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
	createSpecifcationUseCase
);

export { createSpecificationController };
