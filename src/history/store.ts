import { readFileIfExists, writeFileRecursive, fileExists } from "../utils/fs";
import { getHistoryPath } from "../utils/paths";

export async function readHistory() {
  const path = getHistoryPath();
  if (!(await fileExists(path))) return [];

  const content = await readFileIfExists(path);
  try {
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export async function writeHistory(entry: any, limit: number) {
  const path = getHistoryPath();
  const history = await readHistory();

  history.unshift(entry);

  const trimmed = history.slice(0, limit);
  await writeFileRecursive(path, JSON.stringify(trimmed, null, 2));
}
