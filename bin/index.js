#!/usr/bin/env node

const { generateClient } = require("../src");

const args = process.argv.slice(2);

const inputArg = args.find((arg) => arg.startsWith("--input="));
const outputArg = args.find((arg) => arg.startsWith("--output="));

if (!inputArg || !outputArg) {
  console.error(
    "Usage: auto-client-gen --input=./openapi.yaml --output=./client.ts"
  );
  process.exit(1);
}

const inputPath = inputArg.split("=")[1];
const outputPath = outputArg.split("=")[1];

generateClient(inputPath, outputPath);
