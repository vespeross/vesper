import commander from "commander";
import { APP_NAME } from "./constants";

export const program = new commander.Command(APP_NAME);

program
  .version("0.0.1")
  .description("Vesper CLI")
  .command("create project <name>", "Create a new project")
  .option("-l, --list", "List all projects")
  .parse(process.argv);
