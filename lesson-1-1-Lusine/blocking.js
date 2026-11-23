const start = Date.now();
setTimeout(() => {
console.log(`Timer fired after ${Date.now() - start} ms (I asked for 100
ms)`);
}, 100);
// Busy loop: keeps the main thread busy for 2 seconds
while (Date.now() - start < 2000) {}
console.log('Busy loop finished');
