import {getRepository, Repository} from "typeorm";
import Specification from "../../entities/Specification";
import {
	ICreateSpecificationDTO,
	ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
		private repository: Repository<Specification>

	constructor() {
		this.repository = getRepository(Specification)
	}

async	create({ description, name }: ICreateSpecificationDTO): void {
		const specification = this.repository.create({
			name, description
		})

		await this.repository.save(specification)
	} 
	findByName(name: string): Specification {
		const specification = this.repository.find((specification) => {
			specification.name === name;
		});
		return specification;
	}
}

export { SpecificationsRepository };
