import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductInput, ProductResponse } from "./product.schema";
import { createProduct, getProducts, getProduct } from "./product.service";

export async function createProductHandler(
  request: FastifyRequest<{
    Body: CreateProductInput;
  }>
) {
  const product = await createProduct({
    ...request.body,
    //ownerId: request.user.id,
  });

  return product;
}

export async function getProductsHandler() {
  const products = await getProducts();

  return products;
}
export async function getProductHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { id }: any = req.params;
  const product = await getProduct(parseInt(id));

  console.log(product);
  if (!product) {
    return reply.code(404);
  }

  reply.send(product);
}
