import { NextApiRequest, NextApiResponse } from "next";
import usersDB from "../../../tests/db";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(usersDB);
      break;

    case "POST":
      res.status(302).json({ msg: "Posted :^)" });
      break;

    default:
      res.status(405).json({ msg: "wat ?" });
      break;
  }
};

export default handler;
