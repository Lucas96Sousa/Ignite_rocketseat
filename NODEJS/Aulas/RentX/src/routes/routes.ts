import { Router } from "express";

import {categoriesRoutes} from "./categories.routes";
import {specificationRoutes} from "./specifications.routes";
import {authenticateRoutes }from './authenticate.routes'
import {usersRoutes} from './users.routes'

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationRoutes);
routes.use("/users", usersRoutes)
routes.use(authenticateRoutes)

export default routes;
