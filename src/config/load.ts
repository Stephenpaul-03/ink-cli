import { defaultConfig } from "./defaults";
import { readFileIfExists, fileExists } from "../utils/fs";
import { getGlobalConfigPath, getProjectConfigPath } from "../utils/paths";

export async function loadConfig() {
  const globalPath = getGlobalConfigPath();
  const projectPath = getProjectConfigPath();

  const globalConfig = (await fileExists(globalPath))
    ? JSON.parse(await readFileIfExists(globalPath))
    : {};

  const projectConfig = (await fileExists(projectPath))
    ? JSON.parse(await readFileIfExists(projectPath))
    : {};

  return {
    ...defaultConfig,
    ...globalConfig,
    ...projectConfig,
  };
}
