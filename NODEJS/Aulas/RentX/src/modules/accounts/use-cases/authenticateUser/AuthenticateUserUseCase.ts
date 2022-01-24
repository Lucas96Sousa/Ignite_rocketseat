import { IUsersRepository } from '../../repositories/IUsersRepositories'
import {inject, injectable} from 'tsyringe'

import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'



interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({email, password}: IRequest): Promise<IResponse> {
	const user = await this.usersRepository.findByEmail(email)

	if(!user) {
	  throw new Error ('Email or password incorrect')
	}

       const passwordMatch = compare(password, user.password)

       if(!user) {
         throw new Error('Email or password incorrect')
       }

       const logaritm = '7d519280ad225d9b704681d2e042391a93e5d2547b48cf4ac0b0425e6e7f927b'

       const token = sign({}, logaritm, {
         subject: user.id,
         expiresIn: "15d",
       })

       return {user, token}
  }
}


export {AuthenticateUserUseCase}
