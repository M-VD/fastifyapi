import Fastify from "fastify";

import productRoutes from "../modules/product/product.route";
import { productSchemas } from "../modules/product/product.schema";
export function createServer() {
  const server = Fastify();
  server.addSchema(productSchemas);
  server.listen(3000, "0.0.0.0");
  server.register(productRoutes, { prefix: "api/products" });

  return server;
}

createServer();
