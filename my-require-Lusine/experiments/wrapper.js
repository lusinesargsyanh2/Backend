// // a.js
// exports.hello = "hi";
// // b.js
// module.exports = { hello: "hi" };
// // c.js
// exports = { hello: "hi" };
// // d.js
// exports.first = 1;
// module.exports = { second: 2 };
const c1 = require("./counter");
const c2 = require("./counter");

c1.increment();
c1.increment();
console.log(c2.increment());

console.log(c1 === c2);
