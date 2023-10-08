#!/usr/bin/node
const request = require('request');
const { argv } = require('process');

const options = {
  method: 'GET',
  uri: argv[2]
};

if (argv[2]) {
  request(argv[2], options, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    console.log(`code: ${response.statusCode}`);
  });
} else {
  console.log('An error occured missing url command line arg.');
}
