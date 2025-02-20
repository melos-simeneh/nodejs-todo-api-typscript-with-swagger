import express from "express";
import morgan from "morgan";
import { setupSwagger } from "./utils/swagger-config";
import todoRoutes from "./routes/todo.routes";

const app = express();
const port = 3000; // This line is enough

app.use(express.json());
app.use(morgan("combined"));

const [serve, setup] = setupSwagger();
app.use("/docs", serve, setup);

app.use(todoRoutes);

app.listen(port, () => {
  console.log(`Todo API Server running on http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/docs`);
});
