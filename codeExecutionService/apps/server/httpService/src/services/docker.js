import { exec } from "node:child_process";
import util from "util";
const execPromise = util.promisify(exec);
async function main() {
    const { stdout } = await execPromise('docker ps');
    console.log(stdout);
}
main();
