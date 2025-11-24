import { join } from "path";
import os from "os";
import fs from "fs";

export function getGlobalConfigPath() {
  return join(os.homedir(), ".ink", "config.json");
}

export function getProjectConfigPath() {
  const cwd = process.cwd();
  const projectFile = join(cwd, ".ink.json");
  return projectFile;
}

export function getHistoryPath() {
  return join(os.homedir(), ".ink", "history.json");
}
