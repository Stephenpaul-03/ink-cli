export function debug(...args: any[]) {
  if (process.env.INK_DEBUG === "1") {
    console.log("[INK DEBUG]", ...args);
  }
}
