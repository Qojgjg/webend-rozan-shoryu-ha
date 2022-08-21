import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
const filename = "/dist/index.html";

type Data = {
    name: string
}

export default async function api(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(await fs.readFileSync(filename, "utf-8"));
    res.end();
}

