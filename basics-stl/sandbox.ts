//UUId
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

//FS Module

import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson("new.json");
console.log(jsonObj);

const jsonText = [{ name: "varun" }, { name: "lol" }];
await writeJson("new2.json", jsonText, { spaces: 2 }); //spaces means formating it better

//Http module
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });
console.log("listening for reqs on 8000");

for await (const req of server) {
  console.log("Request made");
  const url = req.url;
  req.respond({ body: `Hello, Kush!, you visited ${url} url ` });
}
