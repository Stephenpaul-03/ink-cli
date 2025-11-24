// Placeholder schema. Real validation done in Option B.
export const configSchema = {
  type: "object",
  properties: {
    scopes: { type: "object" },
    synonyms: { type: "object" },
    aliases: { type: "object" },
    historyLimit: { type: "number" },
    emoji: { type: "boolean" },
    gitmoji: { type: "object" },
    theme: { type: "string" },
    color: { type: "boolean" },
    template: { type: "object" },
  },
  additionalProperties: true,
};
