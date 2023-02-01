import { NextApiRequest, NextApiResponse } from "next";
import httpMocks from "node-mocks-http";
import handler from "../../users/[userId]";

/**
 * GET
 */
describe("GET /api/users/[userId]", () => {
  test("200, can get user 1", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "GET",
      query: { userId: "1" },
    });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(200);
    expect(res._getJSONData()).toStrictEqual({ id: 1, name: "John Smith" });
  });

  test("200, can get user 4", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "GET",
      query: { userId: "4" },
    });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(200);
    expect(res._getJSONData()).toStrictEqual({
      id: 4,
      name: "Smith The Headhogde",
    });
  });

  test("200, user NotFound", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "GET",
      query: { userId: "0" },
    });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(200);
    expect(res._getJSONData()).toStrictEqual({ user: "Not Found" });
  });
});

/**
 * POST, PUT, DELETE
 */
describe("other than GET /api/users/[userId]", () => {
  test("POST 405", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "POST",
      query: { userId: "1" },
    });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(405);
  });

  test("PUT 405", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "PUT",
      query: { userId: "2" },
    });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(405);
  });

  test("DELETE 405", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "DELETE",
      query: { userId: "3" },
    });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(405);
  });
});
