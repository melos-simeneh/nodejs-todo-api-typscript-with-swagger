import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "A simple Express API to manage todos",
    },
  },
  apis: ["./routes/todo.routes.ts"],
};

const setupSwagger = () => {
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  return [swaggerUi.serve, swaggerUi.setup(swaggerDocs)];
};

export { setupSwagger };
