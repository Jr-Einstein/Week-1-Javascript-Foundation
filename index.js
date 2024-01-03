const fs = require("fs");
//filesystem module

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Hi Aman");
let a = 0;
for (let i = 1; i < 100; i++) {
  a++;
}
console.log("Hey Aman Kumar Singh");
