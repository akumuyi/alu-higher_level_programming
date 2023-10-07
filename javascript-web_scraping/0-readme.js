#!/usr/bin/node
const fs = require('fs');
const readFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};
const main = () => {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: 0-readme.js <file_path>');
    return;
  }
  readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
};
main();
