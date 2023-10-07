#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');
const closeFd = async (fd) => {
  await fs.promises.close(fd);
};
const writeFile = async (filePath, string) => {
  const fd = await fs.promises.open(filePath, 'w');
  await fs.promises.write(fd, string, 'utf-8');
  await closeFd(fd);
};
const main = async () => {
  const filePath = argv[2];
  const string = argv[3];
  if (!filePath || !string) {
    console.error('Usage: 1-writeme.js <file_path> <string>');
    return;
  }
  try {
    await writeFile(filePath, string);
  } catch (err) {
    console.log(err);
  }
};
main();
