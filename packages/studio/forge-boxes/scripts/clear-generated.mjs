import {mkdirSync, rmSync} from "node:fs"

rmSync("../boxes/src", {recursive: true, force: true})
mkdirSync("../boxes/src", {recursive: true})
