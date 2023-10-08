#!/usr/bin/node
const request = require('request');
const main = async () => {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: 2-statuscode.js <url>');
    return;
  }
  const response = await request(url);
  console.log(`code: ${response.statusCode}`);
};
main();
