export function expandSynonyms(tokens: string[], map: Record<string, string[]>): string[] {
  return tokens.map((t) => {
    for (const [canonical, list] of Object.entries(map)) {
      if (list.includes(t)) return canonical;
    }
    return t;
  });
}
