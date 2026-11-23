const versions = process.versions;
console.log("V8:", versions.v8);
console.log("libuv:", versions.uv);
console.log("OpenSSL:", versions.openssl);
console.log("llhttp:", versions.llhttp);
console.log("zlib:", versions.zlib);
console.log("Platform:", `${process.platform} (${process.arch})`);
console.log("Process ID:", process.pid);
console.log("Working directory:", process.cwd());
console.log("Uptime:", `${process.uptime().toFixed(2)} seconds`);

const heapUsedMB = (process.memoryUsage().heapUsed / (1024 * 1024)).toFixed(2);
console.log("Heap used:", `${heapUsedMB} MB`);
