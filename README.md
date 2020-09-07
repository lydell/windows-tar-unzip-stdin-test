# Windows tar unzip stdin test

`test.zip` contains `hello.txt` which contains `Hello, world!`.

So does `test.tgz`.

Let’s see if we can unzip/untar them using `tar` on Windows. Running each command below should result in `hello.txt` appearing.

Note! Remove `hello.txt` between each step. Run `npm ci` before trying to use `2_cross-spawn.js`.

`test.zip`:

0. `tar xf - < test.zip`
1. `node 1_spawn.js test.zip`
2. `node 2_cross-spawn.js test.zip`
3. `node 3_spawn_no_stdin.js test.zip`

`test.tgz`:

0. `tar xf - < test.tgz`
1. `node 1_spawn.js test.tgz`
2. `node 2_cross-spawn.js test.tgz`
3. `node 3_spawn_no_stdin.js test.tgz`

On macOS they all work.

On Windows everything works except `node 1_spawn.js test.zip` and `node 2_cross-spawn.js test.zip` which fail with:

```
tar: (null)

tar: Error exit delayed from previous errors.

close 1
```

Note: BSD tar can unzip ZIP files, while GNU tar cannot.

Versions used:

- Node.js 14.9.0.
- bsdtar 3.3.2 - libarchive 3.3.2 zlib/1.2.11 liblzma/5.0.5 bz2lib/1.0.6 (mac)
- bsdtar 3.3.2 - libarchive 3.3.2 zlib/1.2.5.f-ipp (Windows)
- macOS Catalina Version 10.15.6
- Windows 10 Home Version 2004
