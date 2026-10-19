import {spawnSync} from "node:child_process"
import {existsSync} from "node:fs"

const windowsBash = "C:\\Program Files\\Git\\bin\\bash.exe"
const command = process.platform === "win32" && existsSync(windowsBash) ? windowsBash : "sh"
const env = process.platform === "win32" && existsSync(windowsBash)
    ? {...process.env, PATH: `C:\\Program Files\\Git\\bin;C:\\Program Files\\Git\\usr\\bin;${process.env.PATH ?? ""}`}
    : process.env
const result = spawnSync(command, ["./build-wasm.sh"], {stdio: "inherit", env})
if (result.error) throw result.error
process.exit(result.status ?? 1)
