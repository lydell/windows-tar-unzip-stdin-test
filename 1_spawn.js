const fs = require("fs");
const childProcess = require("child_process");

const file = process.argv[2];
if (file === undefined) {
  console.error("You must provide a file.");
  process.exit(1);
}

const tar = childProcess.spawn("tar", ["xf", "-"]);

tar.on("error", (error) => {
  console.error("tar error", error);
  process.exit(1);
});

tar.stdout.on("data", (chunk) => console.log(chunk.toString()));

tar.stderr.on("data", (chunk) => console.error(chunk.toString()));

tar.on("close", (code) => {
  console.log("close", code);
});

const read = fs.createReadStream(file);

read.on("error", (error) => {
  console.error("read error", error);
  process.exit(1);
});

read.pipe(tar.stdin);
