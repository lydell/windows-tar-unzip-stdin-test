const childProcess = require("child_process");

const tar = childProcess.spawn("tar", ["xf", "test.zip"]);

tar.on("error", (error) => {
  console.error("tar error", error);
});

tar.stdout.on("data", (chunk) => console.log(chunk.toString()));

tar.stderr.on("data", (chunk) => console.error(chunk.toString()));

tar.on("close", (code) => {
  console.log("close", code);
});
