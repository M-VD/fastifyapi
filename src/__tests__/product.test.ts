import supertest from "supertest";
//const app = require("../server");
import { createServer } from "../utils/server";

import {
  createProduct,
  getProducts,
  getProduct,
} from "../modules/product/product.service";
//import { signJwt } from "../utils/jwt.utils";

console.log(`Fastify ${typeof createServer}`);
console.log(`Fastify ${typeof createServer}`);
console.log(`Fastify ${typeof createServer}`);
//const userId = new mongoose.Types.ObjectId().toString()

export const productPayload = {
  title: "Canon EOS 1500D DSLR Camera with 18-55mm Lens",
  price: 879.99,
  content: "Designed",
};

/*export const userPayload = {
  _id: userId,
  email: "jane.doe@example.com",
  name: "Jane Doe",
};
*/

describe("product", () => {
  /* beforeAll(async () => {

  });

  afterAll(async () => {

  });*/

  /* describe("given the product does not exist", () => {
    it("should return a 404", async () => {
      const productId = "product-123";

      await supertest(app).get(`/api/products/${productId}`).expect(404);
    });
  });*/

  describe("given the product does exist", () => {
    it("should return a 200 status and create the product", async () => {
      const product = await createProduct(productPayload);

      const { body, statusCode } = await supertest(createServer()).get(
        `/api/products`
      );

      expect(statusCode).toBe(200);

      expect(body).toBe(product);
    });
    /*it("should return a 200 status and the product", async () => {
      const productId = 2;
      const product = await getProduct(productId);

      const { body, statusCode } = await supertest(app).get(
        `/api/products/${product.id}`
      );

      expect(statusCode).toBe(200);

      expect(body.id).toBe(product?.id);
    });
    /* it("should return a 200 status and the product", async () => {
      // @ts-ignore

      const product = await getProducts(productPayload);

      const { body, statusCode } = await supertest(app).get(
        `/api/products/${product?.id}`
      );

      expect(statusCode).toBe(200);

      expect(body.id).toBe(product?.id);
    }); /*
    it("should return a 200 status and the product", async () => {
      // @ts-ignore

      const product = await findAndUpdateProduct(productPayload);

      const { body, statusCode } = await supertest(app).get(
        `/api/products/${product?.productId}`
      );

      expect(statusCode).toBe(200);

      expect(body.productId).toBe(product?.productId);
    });
    it("should return a 200 status and delete product", async () => {
      // @ts-ignore
      const product = await findProduct(productPayload);
      // @ts-ignore
      await deleteProduct(product);

      const { body, statusCode } = await supertest(app).get(
        `/api/products/${product?.productId}`
      );

      expect(statusCode).toBe(404);

      expect(body).not.toBe(product);
    });*/
  });

  /* describe('create product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 403', async () => {
        const { statusCode } = await supertest(app).post('/api/products')

        expect(statusCode).toBe(403)
      })
    })

    describe("given the user is logged in", () => {
      it("should return a 200 and create the product", async () => {
        const jwt = signJwt(userPayload);

        const { statusCode, body } = await supertest(app)
          .post("/api/products")
          .set("Authorization", `Bearer ${jwt}`)
          .send(productPayload);

        expect(statusCode).toBe(200);

        expect(body).toEqual({
          __v: 0,
          _id: expect.any(String),
          createdAt: expect.any(String),
          description:
            "Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.",
          image: "https://i.imgur.com/QlRphfQ.jpg",
          price: 879.99,
          productId: expect.any(String),
          title: "Canon EOS 1500D DSLR Camera with 18-55mm Lens",
          updatedAt: expect.any(String),
          user: expect.any(String),
        });
      });
    });
  })*/
});
