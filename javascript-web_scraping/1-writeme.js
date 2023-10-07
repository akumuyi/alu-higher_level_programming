#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');
const closeFd = (fd) => {
  fs.close(fd, (err) => {
    if (err) console.log(err);
  });
};
const writeFile = async (filePath, string) => {
  try {
    const fd = await fs.promises.open(filePath, 'w');
    await fs.promises.write(fd, string, 'utf-8');
    await closeFd(fd);
  } catch (err) {
    console.log(err);
  }
};
const main = async () => {
  const filePath = argv[2];
  const string = argv[3];
  if (!filePath || !string) {
    console.error('Usage: 1-writeme.js <file_path> <string>');
    return;
  }
  await writeFile(filePath, string);
};
main();
