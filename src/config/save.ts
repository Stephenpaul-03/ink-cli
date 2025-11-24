import { writeFileRecursive } from "../utils/fs";
import { getGlobalConfigPath } from "../utils/paths";

export async function saveConfig(config: any) {
  const globalPath = getGlobalConfigPath();
  await writeFileRecursive(globalPath, JSON.stringify(config, null, 2));
}
