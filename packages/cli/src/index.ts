#! /usr/bin/env node

import figlet from "figlet";
import { APP_NAME } from "./constants";
export * from "./command";

console.log(figlet.textSync(APP_NAME));
