export function detectScope(tokens: string[], config: any): string | null {
  const scopes = config.scopes || {};

  for (const [scope, keywords] of Object.entries(scopes)) {
    if (Array.isArray(keywords) && tokens.some(t => keywords.includes(t))) {
      return scope;
    }
  }

  return null;
}
