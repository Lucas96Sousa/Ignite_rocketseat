import {Routes} from 'express'
import {AuthenticateUserController} from '../modules/accounts/use-cases/AuthenticateController'

const authenticateRoutes = Router()

const authenticateUserController = new authenticateUserController()

authenticateRoutes.post('/sessions', authenticateUserController.handle)

export {authenticateRoutes}
