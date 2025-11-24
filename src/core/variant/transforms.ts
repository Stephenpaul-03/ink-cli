export function applyTransforms(input: any, index: number) {
  // TODO: various transforms (short, long, scoped, unscoped, etc)
  return {
    type: input.type,
    scope: input.scope,
    desc: makeDesc(input.tokens),
    preserved: input.preserved,
  };
}

function makeDesc(tokens: string[]): string {
  return tokens.join(" ");
}
