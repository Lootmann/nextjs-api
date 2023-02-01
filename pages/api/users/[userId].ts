import { NextApiRequest, NextApiResponse } from "next";
import usersDB from "../../../tests/db";

const isNumber = (str: string): boolean => {
  if (str.trim() === "") return false;
  return !Number.isNaN(Number(str));
};

const getUserById = (userId: string) => {
  const numberUserId = Number(userId);

  for (const user of usersDB) {
    if (user.id === numberUserId) {
      return user;
    }
  }
  return { user: "Not Found" };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
    method,
  } = req;

  switch (method) {
    case "GET": {
      if (!userId || Array.isArray(userId) || !isNumber(userId)) {
        return res.status(400).end();
      }

      const user = getUserById(userId);
      return res.status(200).json(user);
    }

    default: {
      return res.status(405).end();
    }
  }
};

export default handler;
