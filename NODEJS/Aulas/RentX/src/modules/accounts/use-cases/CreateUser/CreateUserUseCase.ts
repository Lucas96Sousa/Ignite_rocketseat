import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dto/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepositories';

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UsersRepostory')
		private usersRepository: IUsersRepository
	) {}

	async execute({
		name,
		username,
		email,
		password,
		driver_license,
	}: ICreateUserDTO): Promise<void> {
		await this.usersRepository.create({
			name,
			username,
			email,
			password,
			driver_license,
		});
	}
}

export { CreateUserUseCase };