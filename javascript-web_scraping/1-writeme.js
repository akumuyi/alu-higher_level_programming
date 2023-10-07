#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs/promises');
const writeFile = async (filePath, string) => {
  const fd = await fs.open(filePath, 'w');
  await fs.write(fd, string, 'utf-8');
  await fs.close(fd);
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
    console.error(err);
  }
};
main();
