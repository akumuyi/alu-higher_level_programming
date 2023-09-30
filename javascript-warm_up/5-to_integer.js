#!/usr/bin/node
const arg = process.argv[2];
const integerValue = parseInt(arg);
if (!isNaN(integerValue)) {
  console.log(`My number: ${integerValue}`);
} else {
  console.log("Not a number");
}
