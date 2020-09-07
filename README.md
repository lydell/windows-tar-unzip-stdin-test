# Windows tar unzip stdin test

`test.zip` contains `hello.txt` which contains `Hello, world!`.

Let’s see if we can unzip it using `tar` on Windows. Running each command below should result in `hello.txt` appearing.

Note! Remove `hello.txt` between each step.

0. `tar xf - < test.zip`
1. `node 1_spawn.js`
2. `node 2_cross-spawn.js`
3. `node 3_spawn_no_stdin.js`

On macOS they all work.

On Windows TBD.

Note: BSD tar can unzip ZIP files, while GNU tar cannot.
