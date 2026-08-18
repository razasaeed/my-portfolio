import { existsSync } from "node:fs";
import { join } from "node:path";

export function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\//, "");
  return existsSync(join(process.cwd(), "public", relative));
}
