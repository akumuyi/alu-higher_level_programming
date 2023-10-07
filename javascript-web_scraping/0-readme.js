#!/usr/bin/node
const fs = require('fs');

const readFile = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: 0-readme.js <file_path>');
    return;
  }

  await readFile(filePath);
};

main();

