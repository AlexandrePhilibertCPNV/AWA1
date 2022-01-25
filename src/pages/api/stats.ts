import { NextApiRequest, NextApiResponse } from "next";

import stats from "src/data/stats.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const state = req.query.state as string;
    const data = stats.find((s) => s.id === state);

    if (!data) {
      return res.status(404).json({ error: "Not found" });
    }

    return res.status(200).json(data.data);
  }

  return res.status(405).end();
}
