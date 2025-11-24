import enquirer from "enquirer";
const { Input } = enquirer as any;

export async function editMessage(initial: string) {
  const prompt = new Input({
    message: "Edit commit message (press enter to keep):",
    initial
  });

  return await prompt.run();
}
