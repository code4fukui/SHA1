# SHA1

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project provides a simple SHA-1 hashing function implemented in JavaScript, compatible with Deno and Node.js environments.

## Features
- Supports both string and binary data input
- Synchronous and asynchronous digest methods
- Command-line tool for hashing files

## Requirements
- Deno or Node.js environment

## Usage

### As a library
```javascript
import { SHA1 } from "./SHA1.js";

const hash = await SHA1.digest("hello world");
console.log(hash); // "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed"
```

### Command-line tool
```
deno run cli.js path/to/file.txt
```

## License
MIT License — see [LICENSE](LICENSE).