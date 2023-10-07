#!/usr/bin/node
const fs = require('fs');
const writeFile = async (filePath, string) => {
  process.emitWarning = (warning, ... args) => {
    if (args[0] === 'ExperimentalWarning') {
      return;
    }
    return process.emitWarning(warning, ... args);
  };
  try {
    await fs.promises.writeFile(filePath, string, 'utf-8');
  } catch (error) {
    console.error(error);
  }
};
const main = async () => {
  const filePath = process.argv[2];
  const string = process.argv[3];
  if (!filePath || !string) {
    console.error('Usage: 1-writeme.js <file_path> <string>');
    return;
  }
  await writeFile(filePath, string);
};
main();
