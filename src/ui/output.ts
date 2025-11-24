export async function printFinalMessage(msg: string, flags: any) {
  if (flags.copy) {
    const clipboard = await import("clipboardy");
    clipboard.default.writeSync(msg);
  }

  if (!flags.silent) {
    console.log("\nFinal message:\n");
  }

  console.log(msg);
  return msg;
}
