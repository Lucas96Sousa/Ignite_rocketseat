import express from "express";

import routes from "./routes/routes";

const app = express();
const port = 4000;

app.use(express.json());
app.use(routes);

app.listen(port, () =>
	console.log(`Servidor online -- [http://localhost:${port}] `)
);
