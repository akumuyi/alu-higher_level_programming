#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');
const closeFd = (fd, callback) => {
  fs.close(fd, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback();
  });
};
const writeFile = (filePath, string, callback) => {
  fs.open(filePath, 'w', (err, fd) => {
    if (err) {
      callback(err);
      return;
    }
    fs.write(fd, string, 'utf-8', (err, written, string) => {
      if (err) {
        callback(err);
        return;
      }
      closeFd(fd, callback);
    });
  });
};
const main = () => {
  const filePath = argv[2];
  const string = argv[3];
  if (!filePath || !string) {
    console.error('Usage: 1-writeme.js <file_path> <string>');
    return;
  }
  writeFile(filePath, string, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('File written successfully!');
  });
};
main();
