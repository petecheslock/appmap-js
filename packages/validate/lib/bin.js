#!/usr/bin/env node

const { AppmapError } = require("./assert.js");
const { validate } = require("./main.js");

const failure = (message) => {
  process.stderr.write(message);
  process.exitCode = 1;
};

const success = (message) => {
  process.stdout.write(message);
};

if (process.argv.length !== 3) {
  failure("usage: npx appmap-validate path/to/file.appmap.json\n");
} else {
  try {
    success(`Valid ${validate({ path: process.argv[2] })} appmap${"\n"}`);
  } catch (error) {
    if (error instanceof AppmapError) {
      failure(`Invalid appmap:${"\n"}${error.message}${"\n"}`);
    } else {
      throw error;
    }
  }
}
