### express server
user static folder potnt Phaser build folder AHA "client/dist"

ingame folder , use webpack in Dev-server make sure to use right args in package.json
```
    "start": "webpack-dev-server --host 0.0.0.0 --port 3000 --config webpack/base.js --open"
```

### Next public folder
create pages/api to return file in publicfolder, "fs.readFileSync(filename, "utf-8")"
```
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
```

rewrites in next.config to point to file

```
module.exports = {
  rewrites: async () => [
    {
      source: "/dist/index.html",
      destination: "/pages/api/game.ts",
    },
  ],
  reactStrictMode: true,
}
```

go http://localhost:3050/dist/index.html