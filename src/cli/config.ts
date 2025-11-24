import { loadConfig } from "../config/load";
import { saveConfig } from "../config/save";

export async function runConfigEditor() {
  const current = await loadConfig();

  // TODO: Replace with actual TUI editor
  console.log("Config editor coming soon.");
  console.log("Current config:", current);

  await saveConfig(current);
}
