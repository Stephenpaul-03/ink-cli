const TYPE_KEYWORDS: Record<string, string[]> = {
  feat: ["add", "new", "feature", "create"],
  fix: ["fix", "bug", "issue", "resolve", "repair", "patch"],
  style: ["ui", "padding", "margin", "style", "css"],
  refactor: ["refactor", "cleanup", "clean"],
  docs: ["doc", "docs", "documentation"],
  chore: ["chore", "update", "bump"],
  test: ["test", "tests", "testing"]
};

export function detectType(tokens: string[], config: any): string {
  for (const [type, keywords] of Object.entries(TYPE_KEYWORDS)) {
    if (tokens.some(t => keywords.includes(t))) {
      return type;
    }
  }
  return "chore";
}
