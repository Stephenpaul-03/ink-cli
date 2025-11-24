import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { runQuill } from "./quill";
import { runConfigEditor } from "./config";
import { showHistory } from "./history";

export function runCLI() {
  const cli = yargs(hideBin(process.argv))
    .scriptName("ink")
    .command(
      "quill <text>",
      "Generate commit message suggestions",
      (yargs) =>
        yargs
          .positional("text", {
            type: "string",
            describe: "Natural language commit message input"
          })
          .option("variants", {
            alias: "v",
            type: "number",
            default: 5,
            describe: "Number of variants to generate"
          })
          .option("strict", {
            alias: "s",
            type: "boolean",
            default: false
          })
          .option("loose", {
            alias: "l",
            type: "boolean",
            default: false
          })
          .option("silent", {
            alias: "q",
            type: "boolean",
            default: false
          })
          .option("copy", {
            alias: "c",
            type: "boolean",
            default: false
          }),
      (argv) => {
        runQuill(argv.text as string, argv);
      }
    )
    .command("config", "Edit ink-cli configuration", {}, () => {
      runConfigEditor();
    })
    .command("history", "View generated history", {}, () => {
      showHistory();
    })
    .demandCommand(1, "You must specify a command")
    .help()
    .parse();
}
