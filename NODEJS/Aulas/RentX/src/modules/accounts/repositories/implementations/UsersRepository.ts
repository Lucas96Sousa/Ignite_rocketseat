import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";


class UsersRepostory implements IUsersRepository {
  private respository: Repository<User>

  constructor () {
	  this.respository = getRepository(User)
  }

	async create({name, username, email, driver_license, password}: ICreateUserDTO): Promise<void> {
		const user = this.respository.create({
			name, username, email, driver_license, password
		})

		await this.respository.save(user);
	}
}

export {UsersRepostory}