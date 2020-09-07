const fs = require("fs");
const spawn = require("cross-spawn");

const tar = spawn("tar", ["xf", "-"]);

tar.on("error", (error) => {
  console.error("tar error", error);
});

tar.stdout.on("data", (chunk) => console.log(chunk.toString()));

tar.stderr.on("data", (chunk) => console.error(chunk.toString()));

tar.on("close", (code) => {
  console.log("close", code);
});

const read = fs.createReadStream("test.zip");

read.on("error", (error) => {
  console.error("read error", error);
});

read.pipe(tar.stdin);
