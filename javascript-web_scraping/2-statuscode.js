#!/usr/bin/node
const request = require('request');
const { argv } = require('process');
const main = async () => {
  const url = argv[2];
  if (!url) {
    console.error('Usage: 2-statuscode.js <url>');
    return;
  }
  const response = await request(url);
  console.log(`code: ${response.statusCode}`);
};
main();
