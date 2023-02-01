import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({ name: "John Smith" });
  } else if (req.method === "POST") {
    res.status(302).json({ msg: "Posted :^)" });
  } else {
    res.status(404).json({ msg: "wat ?" });
  }
};

export default handler;
