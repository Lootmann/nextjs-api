import { NextApiRequest, NextApiResponse } from "next";
import httpMocks from "node-mocks-http";
import handler from "../../users/index";

describe("Test /api/users", () => {
  test("200", async () => {
    const mockReq = httpMocks.createRequest<NextApiRequest>({ method: "GET" });
    const mockRes = httpMocks.createResponse<NextApiResponse>();

    await handler(mockReq, mockRes);
    expect(mockRes.statusCode).toEqual(200);
    expect(mockRes._getJSONData().length).toBe(4);
  });

  test("302", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({ method: "POST" });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(302);
    expect(res._getJSONData()).toStrictEqual({ msg: "Posted :^)" });
  });

  test("405", async () => {
    const req = httpMocks.createRequest<NextApiRequest>({ method: "PUT" });
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toEqual(405);
    expect(res._getJSONData()).toStrictEqual({ msg: "wat ?" });
  });
});
