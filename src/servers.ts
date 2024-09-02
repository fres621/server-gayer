import { readFileSync } from "fs";
import { parse } from "toml";

const data: { servers: Server[] } = parse(readFileSync("./servers.toml", "utf-8"));

interface Server {
  id: string;
  url: string;
}

export default data?.servers;
