import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepositories";


class UserRepostory implements IUsersRepository {
	create(data: ICreateUserDTO): Promise<void> {
		throw new Error("Method not implemented.");
	}
}

export {UserRepostory}
