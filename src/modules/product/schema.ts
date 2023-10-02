import { FastifyInstance } from "fastify";

import { $ref } from "./product.schema";

const fp = function (fastify: any, opts: any, next: any) {
  fastify.addSchema({
    $id: "http://foo/common.json",
    type: "object",
    definitions: {
      //preHandler: [server.authenticate],
      schema: {
        body: $ref("createProductSchema"),
        response: {
          201: $ref("productResponseSchema"),
        },
      },
    },
  });
  next();
};
