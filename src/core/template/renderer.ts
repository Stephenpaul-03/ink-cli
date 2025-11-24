export function renderTemplate(ctx: any, templateConfig: any = {}) {
  return (
    ctx.raw
      .replace("{preserved}", ctx.preserved.join(" "))
      .replace(/\s{2,}/g, " ")
      .trim()
  );
}
