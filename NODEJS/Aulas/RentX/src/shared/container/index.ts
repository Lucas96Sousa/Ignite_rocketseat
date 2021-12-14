import { container } from 'tsyringe'
import {UsersRepostory} from '../../modules/accounts/repositories/implementations/UsersRepository'
import {IUsersRepository} from '../../modules/accounts/repositories/IUsersRepositories'

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'

/**
** ICategoriesRepository
**/
container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)

/**
	** ISpecificationRepository
 **/

container.registerSingleton<ISpecificationsRepository>(
	"SpecificationsRepository",
	SpecificationsRepository
)

/**
 * * IUsersRepository
**/

container.registerSingleton<IUsersRepository>(
	"UsersRepostory",
	UsersRepostory
)
