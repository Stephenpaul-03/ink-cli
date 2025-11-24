import { runPipeline } from "../core/pipeline";
import { showVariantMenu } from "../ui/menu";
import { editMessage } from "../ui/editor";
import { printFinalMessage } from "../ui/output";
import { loadConfig } from "../config/load";

export async function runQuill(text: string, flags: any) {
  const config = await loadConfig();

  const suggestions = await runPipeline(text, config, flags);

  if (flags.silent) {
    return printFinalMessage(suggestions[0], flags);
  }

  const picked = await showVariantMenu(suggestions);

  if (picked === "regenerate") {
    const newSuggestions = await runPipeline(text, config, flags);
    const again = await showVariantMenu(newSuggestions);
    return finalize(again, flags);
  }

  return finalize(picked, flags);
}

async function finalize(msg: string, flags: any) {
  const edited = await editMessage(msg);
  return printFinalMessage(edited, flags);
}
