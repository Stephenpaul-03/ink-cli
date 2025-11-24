import { tokenizeInput, extractPreserved } from "./tokens";
import { detectType } from "./detect/type";
import { detectScope } from "./detect/scope";
import { generateVariants } from "./variant/generator";
import { renderTemplate } from "./template/renderer";

export async function runPipeline(input: string, config: any, flags: any) {
  const { text, preserved } = extractPreserved(input);
  const tokens = tokenizeInput(text);

  const type = detectType(tokens, config);
  const scope = detectScope(tokens, config);

  const variants = generateVariants({
    type,
    scope,
    tokens,
    preserved,
    config,
    count: flags.variants || 5
  });

  return variants.map(v => renderTemplate(v, config.template));
}
