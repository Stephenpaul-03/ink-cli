interface VariantInput {
  type: string;
  scope: string | null;
  tokens: string[];
  preserved: string[];
  config: any;
  count: number;
}

export function generateVariants(input: VariantInput): any[] {
  const desc = input.tokens.join(" ").trim();

  const variants = [
    `${input.type}${input.scope ? `(${input.scope})` : ""}: ${desc}`,
    `${input.type}: ${desc}`,
    `${input.type}${input.scope ? `(${input.scope})` : ""}: Improve ${desc}`,
    `${input.type}${input.scope ? `(${input.scope})` : ""}: Update ${desc}`,
    `${input.type}${input.scope ? `(${input.scope})` : ""}: Adjust ${desc}`
  ];

  return variants.slice(0, input.count).map(header => ({
    type: input.type,
    scope: input.scope,
    desc,
    raw: header,
    preserved: input.preserved
  }));
}
