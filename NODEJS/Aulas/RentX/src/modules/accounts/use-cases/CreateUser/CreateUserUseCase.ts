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
		email,
		password,
		driver_license,
	}: ICreateUserDTO): Promise<void> {
		await this.usersRepository.create({
			name,
			email,
			password,
			driver_license,
		});
	}
}

export { CreateUserUseCase };
