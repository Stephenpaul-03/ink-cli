import { readHistory } from "../history/store";
import { printHistory } from "../history/print";

export async function showHistory() {
  const history = await readHistory();
  printHistory(history);
}
