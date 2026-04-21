#!/usr/bin/env node

const { program } = require('commander');

const mulchCommand = require('../src/commands/mulch');

program
  .name('garden-calc')
  .description('Garden calculation tools')
  .version('1.0.0');

//Expand later
program.addCommand(mulchCommand);

program.parse(process.argv);
