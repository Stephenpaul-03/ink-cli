export function tokenizeInput(input: string): string[] {
  return input
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

export function extractPreserved(input: string) {
  const preserved: string[] = [];
  const cleaned = input.replace(/\{([^}]+)\}/g, (_, token) => {
    preserved.push(token);
    return "";
  });

  return { text: cleaned.trim(), preserved };
}
