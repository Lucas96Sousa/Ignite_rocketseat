import express from "express";
import swaggerUi from "swagger-ui-express";

import './database'
import './shared/container'

import routes from "./routes/routes";
import swaggerFile from "./swagger.json";




const app = express();
const port = 4000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(port, () =>
	console.log(`Servidor online -- [http://localhost:${port}] `)
);
