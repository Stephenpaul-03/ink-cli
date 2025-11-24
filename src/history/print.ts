export function printHistory(history: any[]) {
  if (history.length === 0) {
    console.log("No history yet.");
    return;
  }

  console.log("\nCommit History:\n");

  history.forEach((h, i) => {
    console.log(`${i + 1}. ${h.message}  (${h.date || "unknown date"})`);
  });

  console.log();
}
