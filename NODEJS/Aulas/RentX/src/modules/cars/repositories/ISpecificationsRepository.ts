import Specification from "../entities/Specification";

interface ICreateSpecificationDTO {
	name: string;
	description: string;
}

interface ISpecificationsRepository {
	create({ description, name }: ICreateSpecificationDTO): Promise<void>;
	findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
