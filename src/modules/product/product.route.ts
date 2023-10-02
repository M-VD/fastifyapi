import { FastifyInstance } from "fastify";
import {
  createProductHandler,
  getProductsHandler,
  getProductHandler,
} from "./product.controller";
import { $ref } from "./product.schema";

async function productRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      //preHandler: [server.authenticate],
      schema: {
        body: $ref("createProductSchema"),
        response: {
          201: $ref("productResponseSchema"),
        },
      },
    },
    createProductHandler
  );

  server.get(
    "/",
    {
      schema: {
        response: {
          200: $ref("productsResponseSchema"),
        },
      },
    },

    getProductsHandler
  );

  server.get(
    "/:id",
    {
      schema: {
        response: {
          200: $ref("productsResponseSchema"),
        },
      },
    },

    getProductHandler
  );
}

export default productRoutes;
