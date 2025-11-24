import { promises as fs } from "fs";
import { dirname } from "path";

export async function fileExists(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

export async function readFileIfExists(path: string): Promise<string> {
  return fs.readFile(path, "utf8");
}

export async function writeFileRecursive(path: string, data: string) {
  await fs.mkdir(dirname(path), { recursive: true });
  await fs.writeFile(path, data, "utf8");
}
