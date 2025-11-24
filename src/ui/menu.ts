import enquirer from "enquirer";
const { Select } = enquirer as any;

export async function showVariantMenu(variants: string[]) {
  const prompt = new Select({
    name: "variant",
    message: "Choose a commit message:",
    choices: [
      ...variants,
      { name: "Generate more", value: "regenerate" },
      { name: "Cancel", value: "cancel" }
    ]
  });

  return await prompt.run();
}
